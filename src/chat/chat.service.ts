import { Injectable } from '@nestjs/common';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { User } from 'src/users/entities/user.entity';
import { getRepository } from 'typeorm';
import { ChatParticipant } from './entities/chat-participants.entity';
import { Chat } from './entities/chat.entity';
import { Document } from 'src/documents/entities/document.entity';

@Injectable()
export class ChatService {
    async findAll(filters: any, user: any) {
        console.log(filters, user);
        try {
            return await getRepository(Chat)
                .createQueryBuilder('chats')
                .where('chats.archived=false')
                // .andWhere(user.pk != null ? "products.user_pk = :user_pk" : '1=1', { user_pk: user_pk })

                // additional where for search
                // All
                .andWhere(
                    filters.hasOwnProperty('filter') && filters.filter == 'All' &&
                        filters.hasOwnProperty('keyword') ?
                        "products.name ILIKE :keyword" :
                        '1=1', { keyword: `%${filters.keyword}%` }
                )
                .select('chats')

                // chat participants
                .leftJoinAndMapMany(
                    'chats.chat_participant',
                    ChatParticipant,
                    'chat_participants',
                    'chats.pk=chat_participants.chat_pk'
                )
                .leftJoinAndMapOne(
                    'chat_participants.user',
                    User,
                    'users',
                    'chat_participants.user_pk=users.pk',
                )
                // user documents
                .leftJoinAndMapMany(
                    'users.user_document',
                    UserDocument,
                    'user_documents',
                    'users.pk=user_documents.user_pk'
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'documents',
                    'user_documents.document_pk=documents.pk',
                )

                .orderBy('last_message_date', 'DESC')
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }
}
