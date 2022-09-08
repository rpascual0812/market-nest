import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { DatabaseModule } from 'src/database.module';
import { Session } from './entities/session.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Session]),
    ],
    providers: [SessionsService],
    controllers: [SessionsController],
    exports: [SessionsService]
})
export class SessionsModule { }
