import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany } from 'typeorm';

@Entity({ name: 'departments' })
@Unique(['name', 'company_pk'])
export class Department extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ name: 'company_pk', nullable: false })
    company_pk: number;

    // @Column({ name: 'created_by', nullable: false })
    // created_by: number;

    // @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    // date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    @OneToMany('User', (user: User) => user.department)
    @JoinColumn({ name: 'pk' })
    user: Array<User>;

    // @ManyToOne(type => User, user => user.deparment, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // @JoinColumn({ name: 'created_by' })
    // user: User;

    @ManyToOne('Company', (company: Company) => company.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'company_pk' })
    company: Company;
}
