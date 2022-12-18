import { Document } from 'src/documents/entities/document.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Complaint } from './complaint.entity';

@Entity({ name: 'complaint_messages' })
export class ComplaintMessage {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'complaint_pk', nullable: false })
    complaint_pk: number;

    @Column({ name: 'message', nullable: false })
    message: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.complaint_message, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Complaint, complaint => complaint.complaint_message, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'complaint_pk' })
    complaint: Complaint;
}
