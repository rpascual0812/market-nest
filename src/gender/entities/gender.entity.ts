import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany } from 'typeorm';

@Entity({ name: 'genders' })
@Unique(['name', 'company_pk'])
export class Gender {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ name: 'company_pk', nullable: false })
    company_pk: number;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */
    @ManyToOne('Company', (company: Company) => company.gender, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'company_pk' })
    company: Company;

    @OneToMany('User', (user: User) => user.gender)
    @JoinColumn({ name: 'pk' })
    user: Array<User>;
}
