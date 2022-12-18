import { Document } from 'src/documents/entities/document.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Complaint } from './complaint.entity';

@Entity({ name: 'complaint_documents' })
@Unique(['document_pk', 'complaint_pk'])
export class ComplaintDocument {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'complaint_pk', nullable: false })
    complaint_pk: number;

    @Column({ name: 'document_pk', nullable: false })
    document_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => Complaint, complaint => complaint.complaint_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'complaint_pk' })
    complaint: Complaint;

    @OneToOne(type => Document, document => document.user_document, { eager: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'document_pk' })
    @JoinTable()
    document: Document[];
}
