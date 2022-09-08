import { Account } from 'src/accounts/entities/account.entity';
import { Company } from 'src/companies/entities/company.entity';
import { Setting } from 'src/settings/entities/setting.entity';
import { Document } from 'src/documents/entities/document.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, OneToMany } from 'typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Cutoff } from 'src/cutoffs/entities/cutoff.entity';
import { TicketMessage } from 'src/tickets/entities/ticket-message.entity';
import { Department } from 'src/departments/entities/department.entity';
import { Gender } from 'src/gender/entities/gender.entity';

@Entity({ name: 'users' })
@Unique(['uuid', 'company_email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ type: 'text', nullable: false })
    employee_number: string;

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
    company_email: string;

    @Column({ type: 'text', nullable: false })
    personal_email: string;

    @Column({ type: 'text', nullable: true })
    photo: string;

    @Column({ name: 'company_pk', nullable: false })
    company_pk: number;

    @Column({ name: 'department_pk', nullable: false })
    department_pk: number;

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

    @ManyToOne('Company', (company: Company) => company.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'company_pk' })
    company: Company;

    @ManyToOne('Department', (deparment: Department) => deparment.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'department_pk' })
    department: Department;

    @OneToOne(type => Account, account => account.user, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'account_pk' })
    account: Account;

    @OneToMany('Setting', (setting: Setting) => setting.user)
    @JoinColumn({ name: 'pk' })
    setting: Array<Setting>;

    @OneToMany('Document', (document: Document) => document.user)
    @JoinColumn({ name: 'pk' })
    document: Array<Document>;

    @OneToMany('Ticket', (ticket: Ticket) => ticket.user)
    @JoinColumn({ name: 'pk' })
    ticket: Array<Ticket>;

    @OneToMany('TicketMessage', (ticketMessage: TicketMessage) => ticketMessage.user)
    @JoinColumn({ name: 'pk' })
    ticketMessage: Array<TicketMessage>;

    @OneToMany('Cutoff', (cutoff: Cutoff) => cutoff.user)
    @JoinColumn({ name: 'pk' })
    cutoff: Array<Cutoff>;

    // @OneToMany('Department', (deparment: Department) => deparment.user)
    // @JoinColumn({ name: 'pk' })
    // deparment: Array<Department>;
}
