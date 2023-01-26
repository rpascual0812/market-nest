import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { ChatMessage } from './chat-messages.entity';
import { Chat } from './chat.entity';

@Entity({ name: 'chat_messages_read' })
export class ChatMessagesRead extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    pk: number;

    @Column({ name: 'chat_pk', nullable: false })
    chat_pk: number;

    @Column({ name: 'chat_message_pk', nullable: false })
    chat_message_pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ default: false })
    read: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    /**
     * Relationship
     */

    @ManyToOne('Chat', (chat: Chat) => chat.chat_message_read, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'chat_pk' })
    chat: Chat;

    @ManyToOne('ChatMessage', (chat_message: ChatMessage) => chat_message.chat_messages_read, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'chat_message_pk' })
    chat_message: ChatMessage;

    @ManyToOne('User', (user: User) => user.chat_messages_read, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;
}
