import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany, JoinTable } from 'typeorm';
import { SliderDocument } from '../slider-documents/entities/slider-document.entity';

@Entity({ name: 'sliders' })
@Unique(['type', 'title'])
export class Slider {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    details: string;

    // @Column({ name: 'document_pk', nullable: false })
    // icon_document_pk: number;

    // @Column({ name: 'document_pk', nullable: false })
    // icon_image_pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.product_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @OneToMany('SliderDocument', (slider_document: SliderDocument) => slider_document.slider, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'slider_document_pk' })
    slider_document: SliderDocument;

    // @OneToOne(type => Document, document => document.icon_document, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // @JoinColumn({ name: 'icon_document_pk' })
    // @JoinTable()
    // icon_document: Document[];

    // @OneToOne(type => Document, document => document.image_document, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // @JoinColumn({ name: 'image_document_pk' })
    // @JoinTable()
    // image_document: Document[];
}
