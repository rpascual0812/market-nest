import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Response, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChatService } from './chat.service';

@Controller('chats')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Body() body: any, @Request() req: any) {
        const chats = await this.chatService.findAll(req.query, req.user);
        // console.log(req.user);
        // console.log('chats', chats);
        if (chats[1] > 0) {
            const chat_pks = chats[0].map(({ pk }) => pk);
            const participants = await this.chatService.getParticipants(chat_pks, req.query);
            // console.log('participants', participants);
            chats[0].forEach(chat => {
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
            });

            // console.log(chats[0]);
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
        let chat = await this.chatService.findByUser(pk, req.user);
        // console.log(chat);

        if (chat.length == 0) {
            const newChat = await this.chatService.create(pk, req.user);
            console.log('newChat', newChat);
            chat = await this.chatService.findByUser(pk, req.user);
        }

        chat = chat[0];
        if (!chat) {
            chat = await this.chatService.findByUser(pk, req.user);
            chat = chat[0];
        }
        console.log('chat', chat);

        const participants = await this.chatService.getParticipants([chat['pk']], req.query);
        // console.log('participants', participants);
        if (!chat.hasOwnProperty('chat_participants')) {
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

        return chat;
    }

    @UseGuards(JwtAuthGuard)
    @Post('messages')
    async saveMessage(@Param('pk') pk: string, @Body() body: any, @Request() req: any, @Response() res: any) {
        const message = await this.chatService.createMessage(body, req.user);
        return res.status(message.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(message);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':pk/messages')
    async findMessages(@Param('pk') pk: string, @Body() body: any, @Request() req: any) {
        let messages = await this.chatService.findMessages(pk, req.query, req.user);
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
        const result = await this.chatService.readMessages(pk, req.user);
        return res.status(result.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(result);
    }
}
