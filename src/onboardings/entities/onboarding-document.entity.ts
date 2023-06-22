import { Document } from 'src/documents/entities/document.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Onboarding } from './onboarding.entity';

@Entity({ name: 'onboarding_documents' })
@Unique(['type', 'onboarding_pk', 'document_pk'])
export class OnboardingDocument {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'onboarding_pk', nullable: false })
    onboarding_pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ name: 'document_pk', nullable: false })
    document_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.onboarding_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Onboarding, onboarding => onboarding.onboarding_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'onboarding_pk' })
    onboarding: Onboarding;

    @OneToOne(type => Document, document => document.product_document, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'document_pk' })
    @JoinTable()
    document: Document[];
}
