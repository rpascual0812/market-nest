import { Injectable } from '@nestjs/common';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { User } from 'src/users/entities/user.entity';
import { EntityManager, getConnection, getRepository } from 'typeorm';
import { ChatParticipant } from './entities/chat-participants.entity';
import { Chat } from './entities/chat.entity';
import { Document } from 'src/documents/entities/document.entity';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage } from './entities/chat-messages.entity';
import { DateTime } from "luxon";

@Injectable()
export class ChatService {
    async create(pk: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const chat = new Chat();
                    chat.uuid = uuidv4();
                    chat.title = null;
                    chat.last_message = null;
                    chat.last_message_user_pk = null;
                    const newchat = await EntityManager.save(chat);

                    if (newchat) {
                        const participant = new ChatParticipant();
                        participant.chat_pk = newchat.pk;
                        participant.user_pk = user.pk;
                        EntityManager.save(participant);

                        const participant2 = new ChatParticipant();
                        participant2.chat_pk = newchat.pk;
                        participant2.user_pk = pk;
                        EntityManager.save(participant2);
                    }

                    return { status: true, data: newchat };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    async findAll(filters: any, user: any) {
        // console.log(filters, user);
        try {
            return await getRepository(Chat)
                .createQueryBuilder('chats')
                .select('chats')

                .leftJoinAndMapOne(
                    'chats.chat_participant',
                    ChatParticipant,
                    'chat_participants',
                    'chats.pk=chat_participants.chat_pk'
                )
                .leftJoinAndMapOne(
                    'chat_participants.user',
                    User,
                    'users',
                    'chat_participants.user=users.pk',
                )
                //     // user documents
                .leftJoinAndMapOne(
                    'users.user_document',
                    UserDocument,
                    'user_documents',
                    'users.pk=user_documents.user_pk and user_documents.type = \'profile_photo\''
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )
                .where('chats.archived=false')
                .andWhere('chat_participants.user_pk = :user_pk', { user_pk: user.pk })


                .orderBy('chats.last_message_date', 'DESC')
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

    async findByUser(pk: any, user: any) {
        try {
            return await getRepository(Chat)
                .createQueryBuilder('chats')
                .select('chats')

                .leftJoinAndMapOne(
                    'chats.chat_participant',
                    ChatParticipant,
                    'chat_participants',
                    'chats.pk=chat_participants.chat_pk'
                )
                .where('chats.archived=false')
                .andWhere('chat_participants.user_pk in (:...user_pk)', { user_pk: [pk, user.pk] })

                .orderBy('chats.last_message_date', 'DESC')
                .getOne()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async getParticipants(pks: any, filters: any) {
        try {
            return await getRepository(ChatParticipant)
                .createQueryBuilder('chat_participants')
                .select('chat_participants')
                .leftJoinAndMapOne(
                    'chat_participants.user',
                    User,
                    'users',
                    'chat_participants.user=users.pk',
                )
                //     // user documents
                .leftJoinAndMapOne(
                    'users.user_document',
                    UserDocument,
                    'user_documents',
                    'users.pk=user_documents.user_pk and user_documents.type = \'profile_photo\''
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )
                .where("chat_participants.chat_pk IN (:...pk)", { pk: pks })
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

    async createMessage(data: any, user: any) {
        console.log(data, user);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            const chat = await Chat.findOne({
                uuid: data.uuid
            });

            return await queryRunner.manager.transaction(
                async (EntityManager) => {

                    const message = new ChatMessage();
                    message.chat_pk = chat.pk;
                    message.user_pk = user.pk;
                    message.message = data.message;
                    const newMessage = await EntityManager.save(message);

                    const parent = await EntityManager.findOne(Chat, chat.pk);
                    parent.last_message = data.message;
                    parent.last_message_user_pk = user.pk;
                    parent.last_message_date = DateTime.now();
                    const updatedChat = await EntityManager.save(parent);

                    return { status: true, data: newMessage };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    async findMessages(pk: any, filters: any, user: any) {
        // console.log(pk, user);
        try {
            return await getRepository(ChatMessage)
                .createQueryBuilder('chat_messages')
                .select('chat_messages')
                .leftJoinAndSelect("chat_messages.user", "users")
                // user documents
                .leftJoinAndMapOne(
                    'users.user_document',
                    UserDocument,
                    'user_documents',
                    'users.pk=user_documents.user_pk and user_documents.type = \'profile_photo\''
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )
                .where('chat_messages.archived=false')
                .andWhere('chat_messages.chat_pk = :pk', { pk })
                .orderBy('chat_messages.date_created', 'DESC')
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
