import { Area } from 'src/areas/entities/area.entity';
import { City } from 'src/cities/entities/city.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Product } from 'src/products/entities/product.entity';
import { UserAddress } from 'src/users/entities/user-address.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany, ManyToMany } from 'typeorm';

@Entity({ name: 'provinces' })
@Unique(['name', 'country_pk'])
export class Province {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ name: 'country_pk', nullable: false })
    country_pk: number;

    @Column({ default: false })
    active: boolean;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    // @OneToMany(type => UserAddress, user_address => user_address.province, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // @JoinColumn({ name: 'user_address_pk' })
    // user_address: UserAddress;

    @OneToMany('UserAddress', (user_address: UserAddress) => user_address.province)
    @JoinColumn({ name: 'pk' })
    user_address: Array<UserAddress>;

    @ManyToOne(type => Country, country => country.province, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'country_pk' })
    country: Country;

    @OneToMany('City', (city: City) => city.province)
    @JoinColumn({ name: 'pk' })
    city: Array<City>;

    @OneToMany('Area', (area: Area) => area.province)
    @JoinColumn({ name: 'pk' })
    area: Array<Area>;

    @ManyToOne(type => User, user => user.province, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;
}

