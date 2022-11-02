import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from './entities/account.entity';
import { Session } from '../sessions/entities/session.entity';
import { SessionsService } from 'src/sessions/sessions.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserDocument } from 'src/users/entities/user-document.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Account, Session, User, UserDocument]),
    ],
    providers: [AccountsService, SessionsService, UsersService],
    controllers: [AccountsController],
    exports: [AccountsService]
})
export class AccountsModule { }
