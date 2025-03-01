import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsService } from 'src/accounts/accounts.service';
import { Account } from 'src/accounts/entities/account.entity';
import { UserDocument } from './entities/user-document.entity';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Account, UserDocument]),
    ],
    controllers: [UsersController],
    providers: [UsersService, AccountsService],
    exports: [UsersService]
})
export class UsersModule { }