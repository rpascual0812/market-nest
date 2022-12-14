import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany, JoinTable } from 'typeorm';
import { SliderDocument } from './slider-document.entity';

@Entity({ name: 'sliders' })
@Unique(['type', 'title'])
export class Slider extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    details: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'order', nullable: true })
    order: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

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
}
