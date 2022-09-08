import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'accounts' })
@Unique(['username'])
export class Account {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    username: string;

    @Column({ type: 'text', nullable: false })
    password: string;

    @Column({ default: true })
    active: boolean;

    @Column({ default: false })
    verified: boolean;

    @Column({ type: 'timestamptz', nullable: true })
    last_login: Date;

    @Column({ type: 'smallint', default: 0 })
    login_attempts: Date;

    @Column({ type: 'jsonb', nullable: true })
    password_reset: Date;

    @Column({ name: 'company_pk', nullable: false })
    company_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /** 
     * Relationship
     */

    @OneToOne(type => User, user => user.account, { cascade: true })
    user: User;
}
