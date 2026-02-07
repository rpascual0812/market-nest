import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccountsModule } from '../accounts/accounts.module';
import { EmailsModule } from '../emails/emails.module';
import { SellerModule } from '../seller/seller.module';
import { SessionsModule } from '../sessions/sessions.module';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env' }),
        AccountsModule,
        UsersModule,
        SessionsModule,
        EmailsModule,
        SellerModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: { expiresIn: process.env.EXPIRES + 's' },
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }
