import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany, JoinTable } from 'typeorm';
import { OnboardingDocument } from './onboarding-document.entity';

@Entity({ name: 'onboardings' })
@Unique(['title'])
export class Onboarding extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    description: string;

    @Column({ name: 'queue', nullable: false })
    queue: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.onboarding, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @OneToMany('OnboardingDocument', (onboarding_document: OnboardingDocument) => onboarding_document.onboarding, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'onboarding_document_pk' })
    onboarding_document: OnboardingDocument;
}
