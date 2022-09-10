import { Account } from 'src/accounts/entities/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';

@Entity({ name: 'logs' })
export class Log extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    pk: number;

    @Column({ type: 'text', nullable: false })
    model: string;

    @Column({ type: 'int', nullable: false })
    model_pk: number;

    @Column({ type: 'jsonb', nullable: true })
    details: string;

    @Column({ name: 'account_pk', nullable: false })
    account_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne('Account', (account: Account) => account.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'account_pk' })
    account: Account;
}
