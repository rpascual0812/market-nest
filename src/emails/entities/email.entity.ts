import { Account } from 'src/accounts/entities/account.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'emails' })
@Unique(['uuid'])
export class Email {
    @PrimaryGeneratedColumn()
    pk: number;

    @ManyToOne(() => Account)
    @JoinColumn({ name: 'account_pk' })
    account: Account;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ type: 'text', nullable: false })
    from: string;

    @Column({ type: 'text', nullable: false })
    from_name: string;

    @Column({ type: 'text', nullable: false })
    to: string;

    @Column({ type: 'text', nullable: false })
    to_name: string;

    @Column({ type: 'text', nullable: true })
    cc: string;

    @Column({ type: 'text', nullable: true })
    bcc: string;

    @Column({ type: 'text', nullable: false })
    subject: string;

    @Column({ type: 'text', nullable: false })
    body: string;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ type: 'text', nullable: false, default: false })
    sent: string;

    @Column({ default: false })
    archived: boolean;
}
