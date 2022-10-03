import { Account } from 'src/accounts/entities/account.entity';
import { Document } from 'src/documents/entities/document.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { TicketMessage } from 'src/tickets/entities/ticket-message.entity';
import { Gender } from 'src/gender/entities/gender.entity';
import { Log } from 'src/logs/entities/log.entity';
import { Country } from 'src/countries/entities/country.entity';
import { UserDocument } from '../user-documents/entities/user-document.entity';
import { ProductDocument } from 'src/products/product-documents/entities/product-document.entity';
import { UserAddress } from '../user-addresses/entities/user-address.entity';
import { Province } from 'src/provinces/entities/province.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Permission } from 'src/permissions/entities/permission.entity';
import { Article } from 'src/articles/entities/article.entity';
import { Notification } from 'src/notifications/entities/notification.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { ChatParticipant } from 'src/chat/entities/chat-participants.entity';
import { ChatMessage } from 'src/chat/entities/chat-messages.entity';
import { City } from 'src/cities/entities/city.entity';
import { Area } from 'src/areas/entities/area.entity';

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
    about: string;

    @Column({ name: 'account_pk', nullable: false })
    account_pk: number;

    @Column({ name: 'role_pk', nullable: false })
    role_pk: number;

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

    @ManyToOne(type => Role, role => role.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'role_pk' })
    role: Role;

    @ManyToOne('Gender', (gender: Gender) => gender.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'gender_pk' })
    gender: Gender;

    // @OneToMany('Document', (document: Document) => document.user)
    // @JoinColumn({ name: 'pk' })
    // document: Array<Document>;

    @OneToMany('Ticket', (ticket: Ticket) => ticket.user)
    @JoinColumn({ name: 'pk' })
    ticket: Array<Ticket>;

    @OneToMany('TicketMessage', (ticketMessage: TicketMessage) => ticketMessage.user)
    @JoinColumn({ name: 'pk' })
    ticketMessage: Array<TicketMessage>;

    @OneToMany('Log', (log: Log) => log.user)
    @JoinColumn({ name: 'pk' })
    log: Array<Log>;

    @ManyToOne('Country', (country: Country) => country.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'country_pk' })
    country: Country;

    @OneToMany('Province', (province: Province) => province.user)
    @JoinColumn({ name: 'pk' })
    province: Array<Province>;

    @OneToMany('City', (city: City) => city.user)
    @JoinColumn({ name: 'pk' })
    city: Array<City>;

    @OneToMany('Area', (area: Area) => area.user)
    @JoinColumn({ name: 'pk' })
    area: Array<Area>;

    @OneToMany('UserAddress', (user_address: UserAddress) => user_address.user)
    @JoinColumn({ name: 'pk' })
    user_address: Array<UserAddress>;



    @OneToMany('UserDocument', (user_document: UserDocument) => user_document.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_document_pk' })
    user_document: UserDocument;

    @OneToMany('ProductDocument', (product_document: ProductDocument) => product_document.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_document_pk' })
    product_document: ProductDocument;

    @OneToMany('Permission', (permission: Permission) => permission.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'permission_pk' })
    permission: Permission;

    @OneToMany('Article', (article: Article) => article.user)
    @JoinColumn({ name: 'pk' })
    article: Array<Article>;

    @OneToMany('Notification', (notification: Notification) => notification.user)
    @JoinColumn({ name: 'pk' })
    notification: Array<Notification>;

    @OneToMany('Chat', (chat: Chat) => chat.user)
    @JoinColumn({ name: 'pk' })
    chat: Array<Chat>;

    @OneToMany('ChatParticipant', (chat_participant: ChatParticipant) => chat_participant.user)
    @JoinColumn({ name: 'pk' })
    chat_participant: Array<ChatParticipant>;

    @OneToMany('ChatMessage', (chat_message: ChatMessage) => chat_message.user)
    @JoinColumn({ name: 'pk' })
    chat_message: Array<ChatMessage>;
}
