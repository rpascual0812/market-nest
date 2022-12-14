import { Document } from 'src/documents/entities/document.entity';
import { Slider } from 'src/sliders/entities/slider.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable, BaseEntity } from 'typeorm';

@Entity({ name: 'slider_documents' })
@Unique(['type', 'slider_pk', 'document_pk'])
export class SliderDocument extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'slider_pk', nullable: false })
    slider_pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ name: 'document_pk', nullable: false })
    document_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.product_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Slider, slider => slider.slider_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'slider_pk' })
    slider: Slider;

    @OneToOne(type => Document, document => document.product_document, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'document_pk' })
    @JoinTable()
    document: Document[];
}
