import { Account } from 'src/accounts/entities/account.entity';
import { Document } from 'src/documents/entities/document.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, OneToMany, ManyToMany } from 'typeorm';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { TicketMessage } from 'src/tickets/entities/ticket-message.entity';
import { Gender } from 'src/gender/entities/gender.entity';
import { Log } from 'src/logs/entities/log.entity';
import { Country } from 'src/countries/entities/country.entity';
import { UserDocument } from './user-document.entity';
import { ProductDocument } from 'src/products/entities/product-document.entity';
import { UserAddress } from './user-address.entity';
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
import { UserPermission } from './user-permission.entity';
import { UserCart } from './user-cart.entity';
import { ProductRating } from 'src/products/entities/product-ratings.entity';
import { UserRating } from './user-rating.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Status } from 'src/statuses/entities/status.entity';
import { Category } from 'src/categories/entities/category.entity';
import { UserFollow } from './user-follow.entity';
import { Seller } from 'src/seller/entities/seller.entity';
import { ProductSeen } from 'src/products/entities/product-seen.entity';
import { Configuration } from 'src/configuration/entities/configuration.entity';
import { Faq } from 'src/faq/entities/faq.entity';

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

    @Column({ default: false })
    is_seller: boolean;

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

    @OneToOne(type => Seller, seller => seller.user, { cascade: true })
    seller: Seller;




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

    @OneToMany('UserPermission', (user_permission: UserPermission) => user_permission.user)
    @JoinColumn({ name: 'pk' })
    user_permission: Array<UserPermission>;

    @OneToMany('UserDocument', (user_document: UserDocument) => user_document.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_document_pk' })
    user_document: UserDocument;

    @OneToMany('ProductDocument', (product_document: ProductDocument) => product_document.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_document_pk' })
    product_document: ProductDocument;

    @OneToMany('Category', (category: Category) => category.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'category_pk' })
    category: Category;

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

    @OneToMany('UserCart', (user_cart: UserCart) => user_cart.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_cart_pk' })
    user_cart: UserCart;

    @OneToMany('ProductRating', (product_rating: ProductRating) => product_rating.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_rating_pk' })
    product_rating: ProductRating;

    @OneToMany('ProductSeen', (product_seen: ProductSeen) => product_seen.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_seen_pk' })
    product_seen: ProductSeen;

    @OneToMany('UserRating', (user_rating: UserRating) => user_rating.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_rating_pk' })
    user_rating: UserRating;

    @OneToMany('UserRating', (user_rating: UserRating) => user_rating.created_by, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'created_by_rating_pk' })
    created_by: UserRating;

    @OneToMany('Order', (order: Order) => order.user_pk, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'order_pk' })
    order: Order;

    // @OneToMany('Order', (order: Order) => order.seller, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // @JoinColumn({ name: 'order_seller_pk' })
    // order_seller: Order;

    @OneToMany('Status', (status: Status) => status.user_pk, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'status_pk' })
    status: Status;

    @OneToMany('UserFollow', (user_follow: UserFollow) => user_follow.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_follow_pk' })
    user_follow: UserFollow;

    @OneToMany('UserFollow', (user_rating: UserFollow) => user_rating.created_by, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'created_by_follow_pk' })
    user_follow_created_by: UserFollow;

    @OneToMany('Configuration', (configuration: Configuration) => configuration.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'configuration_pk' })
    configuration: Configuration;

    @OneToMany('Faq', (faq: Faq) => faq.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'faq_pk' })
    faq: Faq;



}
