import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, ManyToMany, OneToOne, BaseEntity } from 'typeorm';

@Entity({ name: 'configuration' })
@Unique(['group', 'name', 'value'])
export class Configuration extends BaseEntity {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    group: string;

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ type: 'text', nullable: false })
    value: string;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.configuration, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;
}
