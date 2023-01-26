import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToMany, BaseEntity } from 'typeorm';
import { ChatMessagesRead } from './chat-messages-read.entity';
import { Chat } from './chat.entity';

@Entity({ name: 'chat_messages' })
export class ChatMessage extends BaseEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    pk: number;

    @Column({ name: 'chat_pk', nullable: false })
    chat_pk: number;

    @Column({ name: 'user_pk', nullable: false })
    user_pk: number;

    @Column({ type: 'text', nullable: true })
    message: string;

    // @Column({ default: false })
    // read: boolean;

    @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    date_created: Date;

    @Column({ default: false })
    archived: boolean;

    /**
     * Relationship
     */

    @ManyToOne('Chat', (chat: Chat) => chat.chat_message, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'chat_pk' })
    chat: Chat;

    @ManyToOne('User', (user: User) => user.chat_message, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'user_pk' })
    user: User;

    @OneToMany('ChatMessagesRead', (chat_message_read: ChatMessagesRead) => chat_message_read.chat_message)
    @JoinColumn({ name: 'pk' })
    chat_messages_read: Array<ChatMessagesRead>;
}
