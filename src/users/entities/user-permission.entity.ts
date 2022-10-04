import { Permission } from 'src/permissions/entities/permission.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity({ name: 'user_permissions' })
@Unique(['permission_pk', 'user_pk'])
export class UserPermission {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ name: 'permission_pk', nullable: false })
    permission_pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    /**
     * Relationship
     */

    @ManyToOne(type => User, user => user.user_document, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @ManyToOne(type => Permission, permission => permission.user_permission, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'permission_pk' })
    permission: Permission;
}
