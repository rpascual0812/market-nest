import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'inquiries' })
@Unique(['uuid'])
export class Inquiry {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ type: 'text', nullable: false })
    email: string;

    @Column({ type: 'text', nullable: false })
    subject: string;

    @Column({ type: 'text', nullable: false })
    message: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;
}
