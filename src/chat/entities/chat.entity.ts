import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { ChatMessage } from './chat-messages.entity';
import { ChatParticipant } from './chat-participants.entity';

@Entity({ name: 'chats' })
export class Chat extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    pk: number;

    @Column({ type: 'text', nullable: true })
    uuid: string;

    @Column({ type: 'text', nullable: true })
    title: string;

    @Column({ type: 'text', nullable: true })
    last_message: string;

    @Column({ name: 'user_pk', nullable: false })
    last_message_user_pk: number;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne('User', (user: User) => user.notification, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @OneToMany('ChatParticipant', (chat_participant: ChatParticipant) => chat_participant.chat)
    @JoinColumn({ name: 'pk' })
    chat_participant: Array<ChatParticipant>;

    @OneToMany('ChatMessage', (chat_message: ChatMessage) => chat_message.chat)
    @JoinColumn({ name: 'pk' })
    chat_message: Array<ChatMessage>;
}
