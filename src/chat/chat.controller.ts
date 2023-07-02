import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Response, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChatService } from './chat.service';

@Controller('chats')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Body() body: any, @Request() req: any) {
        // console.log(req.query);
        const chats = await this.chatService.findAll(req.query, req.user);
        // console.log(req.user);
        // console.log('chats', chats);
        if (chats[1] > 0) {
            const chat_pks = chats[0].map(({ pk }) => pk);
            const participants = await this.chatService.getParticipants(chat_pks, req.query);
            // const unread_messages = await this.chatService.getUnreadMessages(chat_pks, req.user);
            // console.log('unread', unread_messages);
            chats[0].forEach(chat => {
                chat.read = false;
                if (!chat.hasOwnProperty('chat_participants')) {
                    chat['chat_participants'] = [];
                }
                // Append chat documents

                if (participants) {
                    participants[0].forEach(participant => {
                        if (chat.pk == participant.chat_pk && participant.user_pk != req.user.pk) {
                            chat['chat_participants'].push(participant);
                        }
                    });
                }

                chat.chat_messages_read.forEach(read => {
                    if (read.user_pk == req.user.pk) {
                        chat.read = true;
                    }
                });

                // if (unread_messages) {
                //     unread_messages[0].forEach(message => {
                //         if (chat.pk == message.chat_pk) {
                //             chat.read++;
                //         }
                //     });
                // }
            });

            // console.log('chats', chats[0]);
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
        // remove self from participants
        // chats[0].forEach(chat => {
        //     chat.forEach((participant, i) => {
        //         if (req.user.pk == participant.user_pk) {
        //             chat.chat_participant.splice(i, 1);
        //         }
        //     });
        // });

        if (chats[1] > 0) {
            return {
                status: true,
                data: chats[0],
                total: chats[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('user/:pk')
    async findByUser(@Param('pk') pk: string, @Body() body: any, @Request() req: any) {
        let chat = await this.chatService.findByUser(pk, req.user, req.query);
        // console.log('chat', chat.length, req.query, pk);
        if (chat.length == 0) {
            const newChat = await this.chatService.create(pk, req.user, req.query);
            // console.log('2 chat', newChat);

            chat = await this.chatService.findOne(newChat.data.pk);
            // console.log('3 chat', chat);
        }

        chat = chat[0];
        // console.log(4, chat);
        if (!chat) {
            chat = await this.chatService.findByUser(pk, req.user, req.query);
            chat = chat[0];
        }
        // console.log('chat', chat);

        const participants = await this.chatService.getParticipants([chat ? chat['pk'] : null], req.query);
        // console.log('participants', participants);
        if (chat && !chat.hasOwnProperty('chat_participants')) {
            chat['chat_participants'] = [];
        }
        // Append chat documents

        if (participants) {
            participants[0].forEach(participant => {
                if (chat['pk'] == participant.chat_pk) {
                    chat['chat_participants'].push(participant);
                }
            });
        }
        // console.log('fetch chat', chat);
        return chat;
    }

    @UseGuards(JwtAuthGuard)
    @Post('messages')
    async saveMessage(@Param('pk') pk: string, @Body() body: any, @Request() req: any, @Response() res: any) {
        const message = await this.chatService.createMessage(body, req.user);
        // console.log('message', message['data'].pk);

        const newMessage = await this.chatService.findMessage(message['data'].pk);

        return res.status(message.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json({ status: true, data: newMessage });
    }

    @UseGuards(JwtAuthGuard)
    @Get(':uuid/messages/:pk')
    async findMessage(@Param('uuid') uuid: string, @Param('pk') pk: string, @Body() body: any, @Request() req: any) {
        // console.log(uuid, pk);
        return await this.chatService.findMessage(pk);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':pk/messages')
    async findMessages(@Param('pk') pk: string, @Body() body: any, @Request() req: any) {
        // console.log(body, req);
        let messages = await this.chatService.findMessages([pk], req.query, req.user);
        if (messages[1] > 0) {
            return {
                status: true,
                data: messages[0].reverse(),
                total: messages[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post(':pk/messages/read')
    async readMessages(@Param('pk') pk: string, @Request() req: any, @Response() res: any) {
        const messages = await this.chatService.getMessages(pk, req.user);
        messages.forEach(async message => {
            const chatReads = await this.chatService.getMessageRead(message.pk, req.user);
            if (chatReads.length == 0) {
                await this.chatService.setReadMessage(pk, message.pk, req.user);
            }
        });
        return res.status(HttpStatus.OK).json(messages);
    }

    @UseGuards(JwtAuthGuard)
    @Post('messages/read')
    async readAllMessages(@Body() body: any, @Request() req: any, @Response() res: any) {
        const chats = await this.chatService.participantFirst({ user_pk: req.user.pk }, req.user);
        const chat_pks = chats[0].map(participant => participant.chat_pk);
        const messages = await this.chatService.findMessages(chat_pks, {}, req.user);
        const result = await this.chatService.readAllMessages(messages[0], req.user);

        return res.status(result.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json({ status: true });
    }
}
