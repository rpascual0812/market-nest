import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { Chat } from './chat.entity';

@Entity({ name: 'chat_participants' })
export class ChatParticipant extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    pk: number;

    @Column({ name: 'chat_pk', nullable: false })
    chat_pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ default: false })
    unread: boolean;

    /**
     * Relationship
     */

    @ManyToOne('Chat', (chat: Chat) => chat.chat_participant, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'chat_pk' })
    chat: Chat;

    @ManyToOne('User', (user: User) => user.chat_participant, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;
}
