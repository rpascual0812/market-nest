import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany } from 'typeorm';
import { Account } from 'src/accounts/entities/account.entity';
import { TicketMessage } from 'src/tickets/entities/ticket-message.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { User } from 'src/users/entities/user.entity';
import { Log } from 'src/logs/entities/log.entity';
import { Setting } from 'src/settings/entities/setting.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Gender } from 'src/gender/entities/gender.entity';

@Entity({ name: 'companies' })
export class Company {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ name: 'created_by', nullable: true })
    created_by: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @OneToMany('User', (user: User) => user.company)
    @JoinColumn({ name: 'pk' })
    user: Array<User>;

    @OneToMany('Ticket', (ticket: Ticket) => ticket.company)
    @JoinColumn({ name: 'pk' })
    ticket: Array<Ticket>;

    @OneToMany('TicketMessage', (ticketMessage: TicketMessage) => ticketMessage.ticket)
    @JoinColumn({ name: 'pk' })
    message: Array<TicketMessage>;

    @OneToMany('Log', (log: Log) => log.company)
    @JoinColumn({ name: 'pk' })
    log: Array<Log>;

    @OneToMany('Setting', (setting: Setting) => setting.company)
    @JoinColumn({ name: 'pk' })
    setting: Array<Setting>;

    @OneToMany('Department', (department: Department) => department.company)
    @JoinColumn({ name: 'pk' })
    department: Array<Department>;

    @OneToMany('Gender', (gender: Gender) => gender.company)
    @JoinColumn({ name: 'pk' })
    gender: Array<Gender>;
}
