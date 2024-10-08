import { Measurement } from 'src/measurements/entities/measurement.entity';
import { Product } from 'src/products/entities/product.entity';
import { Seller } from 'src/seller/entities/seller.entity';
import { Status } from 'src/statuses/entities/status.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, Double, ManyToMany, BaseEntity } from 'typeorm';

@Entity({ name: 'orders' })
@Unique(['uuid'])
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'seller_pk', nullable: true })
    seller_pk: number;

    @Column({ name: 'product_pk', nullable: false })
    product_pk: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    quantity: number;

    @Column({ name: 'measurement_pk', nullable: false })
    measurement_pk: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    price: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ name: 'status_pk', nullable: false })
    status_pk: number;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.order, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Seller, seller => seller.order, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'seller_pk' })
    seller: Seller;

    @ManyToOne(type => Product, product => product.order, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_pk' })
    product: Product;

    @ManyToOne(type => Measurement, measurement => measurement.order, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'measurement_pk' })
    measurement: Measurement;

    @ManyToOne(type => Status, status => status.order, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'status_pk' })
    status: Status;
}
