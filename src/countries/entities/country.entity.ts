import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany, ManyToMany } from 'typeorm';

@Entity({ name: 'countries' })
@Unique(['name', 'code'])
export class Country {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    code: string;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ type: 'int', nullable: false })
    dial_code: number;

    @Column({ type: 'text', nullable: false })
    currency_name: string;

    @Column({ type: 'text', nullable: false })
    currency_symbol: string;

    @Column({ type: 'text', nullable: false })
    currency_code: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    active: boolean;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    @OneToMany('Product', (product: Product) => product.country)
    @JoinColumn({ name: 'pk' })
    product: Array<Product>;

    @ManyToMany('Product', (user: User) => user.country)
    @JoinColumn({ name: 'pk' })
    user: Array<User>;
}
