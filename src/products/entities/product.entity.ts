import { Category } from 'src/categories/entities/category.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Measurement } from 'src/measurements/entities/measurement.entity';
import { Order } from 'src/orders/entities/order.entity';
import { UserCart } from 'src/users/entities/user-cart.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, Double, ManyToMany, BaseEntity } from 'typeorm';
import { ProductDocument } from './product-document.entity';
import { ProductInterested } from './product-interested.entity';
import { ProductRating } from './product-ratings.entity';
import { ProductSeen } from './product-seen.entity';

@Entity({ name: 'products' })
@Unique(['uuid'])
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ type: 'text', nullable: false })
    description: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    quantity: number;

    @Column({ name: 'measurement_pk', nullable: false })
    measurement_pk: number;

    @Column({ name: 'category_pk', nullable: false })
    category_pk: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    price_from: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    price_to: number;

    @Column({ name: 'country_pk', nullable: false })
    country_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_available: Date;

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

    @ManyToOne(type => Measurement, measurement => measurement.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'measurement_pk' })
    measurement: Measurement;

    @ManyToOne(type => Category, category => category.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'category_pk' })
    category: Category;

    @ManyToOne('Country', (country: Country) => country.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'country_pk' })
    country: Country;

    @OneToMany('ProductDocument', (product_document: ProductDocument) => product_document.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_document_pk' })
    product_document: ProductDocument[];

    @OneToMany('UserCart', (user_cart: UserCart) => user_cart.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_cart_pk' })
    user_cart: UserCart[];

    @OneToMany('ProductRating', (product_rating: ProductRating) => product_rating.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_rating_pk' })
    product_rating: ProductRating[];

    @OneToMany('ProductInterested', (product_interested: ProductInterested) => product_interested.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_interested_pk' })
    product_interested: ProductInterested[];

    @OneToMany('ProductSeen', (product_seen: ProductSeen) => product_seen.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_seen_pk' })
    product_seen: ProductSeen[];

    @OneToMany('Order', (order: Order) => order.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'order_pk' })
    order: Order;
}
