import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { NotificationsService } from 'src/notifications/notifications.service';

@Module({
    controllers: [ChatController],
    providers: [ChatService, NotificationsService],
})
export class ChatModule { }
