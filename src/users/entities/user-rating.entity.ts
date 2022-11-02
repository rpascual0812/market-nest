import { Permission } from 'src/permissions/entities/permission.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'user_ratings' })
@Unique(['user_pk'])
export class UserRating {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    rating: number;

    @Column({ type: 'text', nullable: true })
    message: String;

    @Column({ default: false })
    anonymous: boolean;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ name: 'created_by', nullable: false })
    created_by: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.user_rating, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => User, user => user.created_by, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'created_by' })
    createdBy: User;
}
