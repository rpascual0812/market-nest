import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Account } from './entities/account.entity';
import { Session } from '../sessions/entities/session.entity';
import { SessionsService } from 'src/sessions/sessions.service';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Account, Session]),
    ],
    providers: [AccountsService, SessionsService],
    controllers: [AccountsController],
    exports: [AccountsService]
})
export class AccountsModule { }
