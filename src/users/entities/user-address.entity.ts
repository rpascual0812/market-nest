import { Area } from 'src/areas/entities/area.entity';
import { City } from 'src/cities/entities/city.entity';
import { Province } from 'src/provinces/entities/province.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'user_addresses' })
@Unique(['type', 'address', 'user_pk'])
export class UserAddress {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'bool', default: false })
    default: boolean;

    @Column({ name: 'province_code', nullable: true })
    province_code: number;

    @Column({ name: 'city_code', nullable: true })
    city_code: number;

    @Column({ name: 'area_pk', nullable: true })
    area_pk: number;

    @Column({ type: 'text', nullable: false })
    address: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.user_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Province, province => province.user_address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'province_code' })
    province: Province;

    @ManyToOne(type => City, city => city.user_address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'city_code' })
    city: City;

    @ManyToOne(type => Area, area => area.user_address, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'area_pk' })
    area: Area;
}
