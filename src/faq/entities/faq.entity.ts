import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, ManyToMany, OneToOne, BaseEntity } from 'typeorm';

@Entity({ name: 'faq' })
@Unique(['question', 'answer'])
export class Faq extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    question: string;

    @Column({ type: 'text', nullable: false })
    answer: string;

    @Column({ name: 'order', nullable: false })
    order: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.faq, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;
}
