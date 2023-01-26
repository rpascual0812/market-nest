import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { ChatMessagesRead } from './chat-messages-read.entity';
import { ChatMessage } from './chat-messages.entity';
import { ChatParticipant } from './chat-participants.entity';

@Entity({ name: 'chats' })
export class Chat extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    pk: number;

    @Column({ type: 'text', nullable: false })
    uuid: string;

    @Column({ type: 'text', default: 'chat' })
    type: string;

    @Column({ type: 'text', nullable: true })
    title: string;

    @Column({ type: 'text', nullable: true })
    last_message: string;

    @Column({ name: 'last_message_user_pk', nullable: true })
    last_message_user_pk: number;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    last_message_date: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne('User', (user: User) => user.notification_user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'last_message_user_pk' })
    user: User;

    @OneToMany('ChatParticipant', (chat_participant: ChatParticipant) => chat_participant.chat)
    @JoinColumn({ name: 'pk' })
    chat_participant: Array<ChatParticipant>;

    @OneToMany('ChatMessagesRead', (chat_message_read: ChatMessagesRead) => chat_message_read.chat)
    @JoinColumn({ name: 'pk' })
    chat_message_read: Array<ChatMessagesRead>;

    @OneToMany('ChatMessage', (chat_message: ChatMessage) => chat_message.chat)
    @JoinColumn({ name: 'pk' })
    chat_message: Array<ChatMessage>;
}
