import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from './entities/account.entity';
import { Session } from '../sessions/entities/session.entity';
import { SessionsService } from '../sessions/sessions.service';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../users/entities/user-document.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Account, Session, User, UserDocument]),
    ],
    providers: [AccountsService, SessionsService, UsersService],
    controllers: [AccountsController],
    exports: [AccountsService]
})
export class AccountsModule { }
