import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { TicketMessage } from './entities/ticket-message.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Ticket, TicketMessage]),
    ],
    controllers: [TicketsController],
    providers: [TicketsService],
    exports: [TicketsService]
})
export class TicketsModule { }
