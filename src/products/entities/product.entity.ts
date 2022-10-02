import { Country } from 'src/countries/entities/country.entity';
import { Measurement } from 'src/measurements/entities/measurement.entity';
import { ProductImage } from 'src/products/product-images/entities/product-image.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, Double } from 'typeorm';

@Entity({ name: 'products' })
@Unique(['uuid'])
export class Product {
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

    @Column({ type: 'int', nullable: false })
    quantity: number;

    // @Column({ type: 'text', nullable: false })
    // measurement: string;

    @Column({ name: 'measurement_pk', nullable: false })
    measurement_pk: number;

    @Column({ type: 'int', nullable: false })
    price_from: number;

    @Column({ type: 'int', nullable: true })
    price_to: number;

    @Column({ name: 'country_pk', nullable: false })
    country_pk: number;

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

    @ManyToOne('Country', (country: Country) => country.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'country_pk' })
    country: Country;

    @OneToMany('ProductImage', (product_image: ProductImage) => product_image.product, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'product_image_pk' })
    product_image: ProductImage;
}
