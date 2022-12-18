import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, ManyToMany, OneToOne, BaseEntity } from 'typeorm';
import { ComplaintDocument } from './complaint-document.entity';
import { ComplaintMessage } from './complaint-message.entity';

@Entity({ name: 'complaints' })
export class Complaint extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'text', nullable: false })
    subject: string;

    @Column({ name: 'status', nullable: false })
    status: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.complaint, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @OneToMany('ComplaintMessage', (complaint_message: ComplaintMessage) => complaint_message.complaint, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'complaint_message_pk' })
    complaint_message: ComplaintMessage[];

    @OneToMany('ComplaintDocument', (complaint_document: ComplaintDocument) => complaint_document.complaint, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'complaint_document_pk' })
    complaint_document: ComplaintDocument[];
}
