import { Account } from 'src/accounts/entities/account.entity';
import { Document } from 'src/documents/entities/document.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { TicketMessage } from 'src/tickets/entities/ticket-message.entity';
import { Gender } from 'src/gender/entities/gender.entity';
import { Log } from 'src/logs/entities/log.entity';
import { Country } from 'src/countries/entities/country.entity';
import { ProductImage } from 'src/products/product-images/entities/product-image.entity';
import { UserDocument } from '../user-documents/entities/user-document.entity';

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

    @Column({ type: 'text', nullable: true })
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

    @Column({ name: 'country_pk', nullable: false })
    country_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    @OneToOne(type => Account, account => account.user, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'account_pk' })
    account: Account;

    @OneToOne('Gender', (gender: Gender) => gender.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'gender_pk' })
    gender: Gender;

    @OneToMany('Document', (document: Document) => document.user)
    @JoinColumn({ name: 'pk' })
    document: Array<Document>;

    @OneToMany('Ticket', (ticket: Ticket) => ticket.user)
    @JoinColumn({ name: 'pk' })
    ticket: Array<Ticket>;

    @OneToMany('TicketMessage', (ticketMessage: TicketMessage) => ticketMessage.user)
    @JoinColumn({ name: 'pk' })
    ticketMessage: Array<TicketMessage>;

    @OneToMany('Log', (log: Log) => log.user)
    @JoinColumn({ name: 'pk' })
    log: Array<Ticket>;

    @ManyToMany('Country', (country: Country) => country.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'country_pk' })
    country: Country;

    @OneToMany('ProductImage', (product_image: ProductImage) => product_image.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_image_pk' })
    product_image: ProductImage;

    @OneToMany('UserDocument', (user_document: UserDocument) => user_document.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_document_pk' })
    user_document: UserDocument;

    // @OneToMany('Department', (deparment: Department) => deparment.user)
    // @JoinColumn({ name: 'pk' })
    // deparment: Array<Department>;
}
