import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsService } from 'src/accounts/accounts.service';
import { Account } from 'src/accounts/entities/account.entity';
import { EmailsModule } from 'src/emails/emails.module';
import { Email } from 'src/emails/entities/email.entity';
import { UserDocument } from './entities/user-document.entity';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Role } from 'src/roles/entities/role.entity';
import { Gender } from 'src/gender/entities/gender.entity';
import { Log } from 'src/logs/entities/log.entity';
import { UserPermission } from './entities/user-permission.entity';
import { Permission } from 'src/permissions/entities/permission.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { ChatParticipant } from 'src/chat/entities/chat-participants.entity';
import { ChatMessage } from 'src/chat/entities/chat-messages.entity';
import { ChatMessagesRead } from 'src/chat/entities/chat-messages-read.entity';
import { UserRating } from './entities/user-rating.entity';
import { UserFollow } from './entities/user-follow.entity';
import { Configuration } from 'src/configuration/entities/configuration.entity';
import { Faq } from 'src/faq/entities/faq.entity';
import { Complaint } from 'src/complaints/entities/complaint.entity';
import { ComplaintMessage } from 'src/complaints/entities/complaint-message.entity';
import { ComplaintDocument } from 'src/complaints/entities/complaint-document.entity';
import { Feedback } from 'src/feedback/entities/feedback.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Account, UserDocument, Role, Gender, Log, UserPermission, Permission, Notification, Chat, ChatParticipant, ChatMessage, ChatMessagesRead, UserRating, UserFollow, Configuration, Faq, Complaint, ComplaintMessage, ComplaintDocument, Feedback, Email]),
        EmailsModule,
    ],
    controllers: [UsersController],
    providers: [UsersService, AccountsService],
    exports: [UsersService]
})
export class UsersModule { }