import { Area } from 'src/areas/entities/area.entity';
import { Country } from 'src/countries/entities/country.entity';
import { Province } from 'src/provinces/entities/province.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany, ManyToMany } from 'typeorm';

@Entity({ name: 'cities' })
@Unique(['name', 'country_pk', 'province_pk'])
export class City {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ name: 'country_pk', nullable: false })
    country_pk: number;

    @Column({ name: 'province_pk', nullable: false })
    province_pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    @ManyToOne(type => Country, country => country.city, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'country_pk' })
    country: Country;

    @ManyToOne(type => Province, province => province.city, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'province_pk' })
    province: Province;

    @OneToMany('Area', (areas: Area) => areas.city)
    @JoinColumn({ name: 'pk' })
    area: Array<Area>;

    @ManyToOne(type => User, user => user.city, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;
}

