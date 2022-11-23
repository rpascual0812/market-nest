import { Area } from 'src/areas/entities/area.entity';
import { City } from 'src/cities/entities/city.entity';
import { Province } from 'src/provinces/entities/province.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Seller } from './seller.entity';

@Entity({ name: 'seller_addresses' })
@Unique(['seller_pk', 'type'])
export class SellerAddress {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'bool', default: false })
    default: boolean;

    @Column({ name: 'province_pk', nullable: false })
    province_pk: number;

    @Column({ name: 'city_pk', nullable: false })
    city_pk: number;

    @Column({ name: 'area_pk', nullable: false })
    area_pk: number;

    @Column({ type: 'text', nullable: false })
    address: string;

    @Column({ name: 'seller_pk', nullable: false })
    seller_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => Seller, seller => seller.seller_address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'seller_pk' })
    seller: Seller;

    @ManyToOne(type => Province, province => province.seller_address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'province_pk' })
    province: Province;

    @ManyToOne(type => City, city => city.seller_address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'city_pk' })
    city: City;

    @ManyToOne(type => Area, area => area.seller_address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'area_pk' })
    area: Area;
}
