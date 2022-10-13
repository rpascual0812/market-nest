import { Permission } from 'src/permissions/entities/permission.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'user_follow' })
@Unique(['following', 'follower'])
export class UserFollow {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'following', nullable: false })
    following: number;

    @Column({ name: 'follower', nullable: false })
    follower: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.following, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'following' })
    userFollowing: User;

    @ManyToOne(type => User, user => user.follower, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'follower' })
    userFollower: User;
}
