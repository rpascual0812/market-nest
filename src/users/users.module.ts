import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database.module';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserAddressesModule } from './user-addresses/user-addresses.module';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([User]),
        UserAddressesModule,
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule { }