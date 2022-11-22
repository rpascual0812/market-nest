import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Response } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChatService } from './chat.service';

@Controller('chats')
export class ChatController {
    constructor(private readonly chatService: ChatService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Body() body: any, @Request() req: any) {
        const chats = await this.chatService.findAll(body, req.user);

        // remove self from participants
        chats[0].forEach(chat => {
            chat.chat_participant.forEach((participant, i) => {
                if (req.user.pk == participant.user_pk) {
                    chat.chat_participant.splice(i, 1);
                }
            });
        });

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
}
