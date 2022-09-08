import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad } from 'typeorm';

@Entity({ name: 'cutoffs' })
@Unique(['uuid'])
export class Cutoff extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'company_pk', nullable: false })
    company_pk: number;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    date_from: Date;

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    date_to: Date;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    cutoff: string;
    @AfterLoad()
    setComputed() {
        this.cutoff = this.date_from + ' - ' + this.date_to;
    }

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.cutoff, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne('Company', (company: Company) => company.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'company_pk' })
    company: Company;
}
