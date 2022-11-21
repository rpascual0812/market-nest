import { Area } from 'src/areas/entities/area.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Province } from 'src/provinces/entities/province.entity';
import { SellerAddress } from 'src/seller/entities/seller-address.entity';
import { UserAddress } from 'src/users/entities/user-address.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cities' })
@Unique(['name', 'country_pk', 'province_code'])
export class City {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ name: 'country_pk', nullable: false })
    country_pk: number;

    @Column({ name: 'province_code', nullable: true })
    province_code: number;

    @Column({ name: 'city_code', unique: true, nullable: true })
    // @PrimaryColumn()
    city_code: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    @OneToMany('UserAddress', (user_address: UserAddress) => user_address.city)
    @JoinColumn({ name: 'pk' })
    user_address: Array<UserAddress>;

    @OneToMany('SellerAddress', (seller_address: SellerAddress) => seller_address.city)
    @JoinColumn({ name: 'pk' })
    seller_address: Array<SellerAddress>;

    @ManyToOne(type => Country, country => country.city, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'country_pk' })
    country: Country;

    @ManyToOne(type => Province, province => province.city, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'province_code' })
    province: Province;

    @OneToMany('Area', (areas: Area) => areas.city)
    @JoinColumn({ name: 'city_code' })
    area: Area[];

    @ManyToOne(type => User, user => user.city, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;
}

