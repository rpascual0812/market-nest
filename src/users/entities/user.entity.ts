import { Account } from 'src/accounts/entities/account.entity';
import { Document } from 'src/documents/entities/document.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, OneToMany } from 'typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { TicketMessage } from 'src/tickets/entities/ticket-message.entity';
import { Gender } from 'src/gender/entities/gender.entity';

@Entity({ name: 'users' })
@Unique(['uuid'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ type: 'text', nullable: false })
    last_name: string;

    @Column({ type: 'text', nullable: false })
    first_name: string;

    @Column({ type: 'text', nullable: false })
    middle_name: string;

    @Column({ name: 'gender_pk', nullable: true })
    gender_pk: number;

    @Column({ type: 'date' })
    birthdate: Date;

    @Column({ type: 'text', nullable: false })
    mobile_number: string;

    @Column({ type: 'text', nullable: false })
    email_address: string;

    @Column({ type: 'text', nullable: true })
    photo: string;

    @Column({ name: 'account_pk', nullable: false })
    account_pk: number;

    // @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    // date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne('Gender', (gender: Gender) => gender.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'gender_pk' })
    gender: Gender;

    @OneToOne(type => Account, account => account.user, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'account_pk' })
    account: Account;

    @OneToMany('Document', (document: Document) => document.user)
    @JoinColumn({ name: 'pk' })
    document: Array<Document>;

    @OneToMany('Ticket', (ticket: Ticket) => ticket.user)
    @JoinColumn({ name: 'pk' })
    ticket: Array<Ticket>;

    @OneToMany('TicketMessage', (ticketMessage: TicketMessage) => ticketMessage.user)
    @JoinColumn({ name: 'pk' })
    ticketMessage: Array<TicketMessage>;

    // @OneToMany('Department', (deparment: Department) => deparment.user)
    // @JoinColumn({ name: 'pk' })
    // deparment: Array<Department>;
}
