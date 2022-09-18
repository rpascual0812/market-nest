import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany } from 'typeorm';

@Entity({ name: 'measurements' })
@Unique(['name'])
export class Measurement {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    symbol: string;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    @OneToMany('Product', (product: Product) => product.measurement)
    @JoinColumn({ name: 'pk' })
    product: Array<Product>;
}
