import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, ManyToMany, OneToOne } from 'typeorm';
import { Account } from 'src/accounts/entities/account.entity';
import { User } from 'src/users/entities/user.entity';
import { UserDocument } from 'src/users/user-documents/entities/user-document.entity';
import { ProductDocument } from 'src/products/product-documents/entities/product-document.entity';
import { Slider } from 'src/sliders/entities/slider.entity';
import { SliderDocument } from 'src/sliders/slider-documents/entities/slider-document.entity';

@Entity({ name: 'documents' })
@Unique(['filename'])
export class Document {
    @PrimaryGeneratedColumn()
    pk: number;

    // @Column({ name: 'user_pk', nullable: false })
    // user_pk: number;

    @Column({ type: 'text', nullable: false })
    original_name: string;

    @Column({ type: 'text', nullable: false })
    filename: string;

    @Column({ type: 'text', nullable: false })
    path: string;

    @Column({ type: 'text', nullable: false })
    mime_type: string;

    @Column({ type: 'numeric' })
    size: number;

    // @Column({ type: 'text', nullable: true })
    // table_name: string;

    // @Column({ type: 'int', nullable: true })
    // table_id: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    // @ManyToOne(type => User, user => user.document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // @JoinColumn({ name: 'user_pk' })
    // user: User;

    @OneToOne(type => UserDocument, user_document => user_document.document, { cascade: true })
    user_document: UserDocument;

    @OneToOne(type => ProductDocument, product_document => product_document.document, { cascade: true })
    product_document: ProductDocument;

    @OneToOne(type => SliderDocument, slider_document => slider_document.document, { cascade: true })
    slider_document: SliderDocument;

}
