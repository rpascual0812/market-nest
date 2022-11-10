import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { SellerAddress } from './seller-address.entity';
import { SellerDocument } from './seller-document.entity';

@Entity({ name: 'sellers' })
@Unique(['user_pk'])
export class Seller extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'text', nullable: false })
    mobile_number: string;

    @Column({ type: 'text', nullable: true })
    about: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @OneToOne(type => User, user => user.seller, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @OneToMany(type => SellerAddress, seller_address => seller_address.seller, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'seller_address_pk' })
    @JoinTable()
    seller_address: SellerAddress[];

    @OneToMany(type => SellerDocument, seller_document => seller_document.seller, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'seller_document_pk' })
    @JoinTable()
    seller_document: SellerDocument[];
}
