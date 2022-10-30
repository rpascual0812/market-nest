import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Seller } from './seller.entity';
import { Document } from 'src/documents/entities/document.entity';

@Entity({ name: 'seller_documents' })
@Unique(['type', 'document_pk', 'seller_pk'])
export class SellerDocument {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'seller_pk', nullable: false })
    seller_pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ name: 'document_pk', nullable: false })
    document_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => Seller, seller => seller.seller_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'seller_pk' })
    seller: Seller;

    @OneToOne(type => Document, document => document.user_document, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'document_pk' })
    @JoinTable()
    document: Document[];

}
