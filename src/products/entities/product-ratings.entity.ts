import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable, BaseEntity } from 'typeorm';

@Entity({ name: 'product_ratings' })
@Unique(['product_pk', 'user_pk'])
export class ProductRating extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'product_pk', nullable: false })
    product_pk: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    rating: number;

    @Column({ type: 'text', nullable: true })
    message: String;

    @Column({ default: false })
    anonymous: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.product_rating, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Product, product => product.product_rating, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_pk' })
    product: Product;
}
