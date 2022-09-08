import { Account } from 'src/accounts/entities/account.entity';
import { Company } from 'src/companies/entities/company.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity } from 'typeorm';

@Entity({ name: 'ticket_messages' })
export class TicketMessage extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'company_pk' })
    company_pk: number;

    @Column({ type: 'text', nullable: false })
    message: string;

    @Column({ name: 'ticket_pk' })
    ticket_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /** 
     * Relationship
     */

    @ManyToOne(type => User, user => user.ticketMessage, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Company, company => company.message, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'company_pk' })
    company: Company;

    @ManyToOne('Ticket', (ticket: Ticket) => ticket.message, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'ticket_pk' })
    ticket: Ticket;


}
