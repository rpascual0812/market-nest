import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { TicketMessage } from './ticket-message.entity';

@Entity({ name: 'tickets' })
@Unique(['uuid'])
export class Ticket {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'company_pk', nullable: false })
    company_pk: number;

    @Column({ type: 'text', nullable: false })
    category: string;

    @Column({ type: 'text', nullable: false })
    subject: string;

    @Column({ type: 'text', nullable: false })
    status: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.ticket, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Company, company => company.ticket, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'company_pk' })
    company: Company;

    // @OneToMany(() => TicketMessages, ticketMessages => ticketMessages.ticket, { cascade: true })
    @OneToMany('TicketMessage', (ticketMessage: TicketMessage) => ticketMessage.ticket, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'ticket_pk' })
    message: Array<TicketMessage>;
}
