import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository, getConnection, Collection } from 'typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './entities/ticket.entity';

import { v4 as uuidv4 } from 'uuid';
import { TicketMessage } from './entities/ticket-message.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { query } from 'express';
import { User } from 'src/users/entities/user.entity';
import { Log } from 'src/logs/entities/log.entity';

@Injectable()
export class TicketsService {
    constructor(
        // @InjectRepository(Ticket)
        // private ticketRepository: Repository<Ticket>,
        @InjectRepository(TicketMessage)
        private messageRepository: Repository<TicketMessage>,
    ) { }

    @UsePipes(ValidationPipe)
    async create(form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const uuid = uuidv4();
                    const ticket = new Ticket();
                    ticket.user_pk = user.pk;
                    ticket.uuid = uuid;
                    ticket.category = form.category;
                    ticket.subject = form.subject;
                    ticket.status = 'Pending';
                    const newTicket = await EntityManager.save(ticket);

                    const message = new TicketMessage();
                    message.user_pk = user.pk;
                    message.ticket_pk = newTicket.pk;
                    message.message = form.message;
                    const newTicketMessage = await EntityManager.save(message);

                    // LOGS
                    const log = new Log();
                    log.model = 'ticket_messages';
                    log.model_pk = newTicketMessage.pk;
                    log.details = JSON.stringify({
                        account_pk: user.pk,
                        uuid: uuid,
                        category: form.category,
                        subject: form.subject,
                        status: 'Pending'
                    });
                    log.account_pk = user.pk;
                    await EntityManager.save(log);

                    const log2 = new Log();
                    log2.model = 'tickets';
                    log2.model_pk = newTicket.pk;
                    log2.details = JSON.stringify({
                        account_pk: user.pk,
                        ticket_pk: newTicket.pk,
                        message: form.message
                    });
                    log2.account_pk = user.pk;
                    await EntityManager.save(log2);

                    return { status: true, uuid: newTicket.uuid };
                }
            );

        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    async findAll(filter: any) {
        return await getRepository(Ticket)
            .createQueryBuilder('tickets')
            .select(
                [
                    'tickets.pk',
                    'tickets.account',
                    'tickets.uuid',
                    'tickets.category',
                    'tickets.subject',
                    'tickets.status',
                    'tickets.date_created'
                ]
            )
            .leftJoinAndSelect("tickets.account", "accounts")
            .where("account_pk = :account_pk", { account_pk: filter.account.pk })
            .orderBy('tickets.pk', 'DESC')
            .skip(filter.pagination.skip)
            .take(filter.pagination.take)
            .getMany()
            ;
    }

    findOne(uuid: string) {
        return getRepository(Ticket)
            .createQueryBuilder('tickets')
            .where("tickets.uuid = :uuid", { uuid })
            .getOne()
            ;
    }

    async update(pk: number, user: object, body: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        console.log(body, user);
        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const ticket = await EntityManager.update(Ticket, body.pk, body);
                    if (ticket.affected > 0) {
                        // LOGS
                        const log = new Log();
                        log.model = 'tickets';
                        log.model_pk = body.pk;
                        log.details = JSON.stringify(body);
                        log.account_pk = user['pk'];
                        await EntityManager.save(log);
                    }

                    const updatedTicket = await EntityManager.findOne(Ticket, body.pk);
                    return { status: ticket.affected > 0 ? true : false, uuid: updatedTicket.uuid };
                }
            );

        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    remove(id: number) {
        return `This action removes a #${id} ticket`;
    }

    // CONVERSATIONS
    async createMessage(form: any, user: any) {
        // console.log(form, user);
        const obj: any = {
            account_pk: user.pk,
            ticket_pk: form.ticket_pk,
            uuid: form.uuid,
            message: form.message
        }

        const newConversation = this.messageRepository.create(obj);
        return this.messageRepository.save(newConversation);
    }

    async findMessages(filter: any) {
        // console.log('messages', filter);
        return await TicketMessage.find({
            join: {
                alias: 'ticket_messages', // base table
                leftJoinAndSelect: {
                    'accounts': 'ticket_messages.account',
                    'users': 'accounts.user',
                    'tickets': 'ticket_messages.ticket'
                },
            },
            where: {
                ticket_pk: filter.ticket_pk
            },
            order: {
                pk: 'DESC'
            }
        });
    }
}
