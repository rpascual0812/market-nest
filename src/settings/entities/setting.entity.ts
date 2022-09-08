import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'settings' })
// @Unique(['username'])
export class Setting {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'company_pk', nullable: false })
    company_pk: number;

    // @Column({ type: 'text', nullable: false })
    @Column({ type: 'jsonb', nullable: true })
    settings: string;

    @Column({ type: 'text', nullable: false })
    group: string;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ nullable: true })
    sort: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.setting, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Company, company => company.setting, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'company_pk' })
    company: Company;
}
