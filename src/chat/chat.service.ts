import { Injectable } from '@nestjs/common';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { User } from 'src/users/entities/user.entity';
import { EntityManager, getConnection, getRepository, getManager, Brackets } from 'typeorm';
import { ChatParticipant } from './entities/chat-participants.entity';
import { Chat } from './entities/chat.entity';
import { Document } from 'src/documents/entities/document.entity';
import { v4 as uuidv4 } from 'uuid';
import { ChatMessage } from './entities/chat-messages.entity';
import { DateTime } from "luxon";
import { ChatMessagesRead } from './entities/chat-messages-read.entity';

@Injectable()
export class ChatService {
    async create(pk: any, user: any, params: any) {
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
                    chat.type = params.type;
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
                .leftJoinAndMapMany(
                    'chats.chat_messages_read',
                    ChatMessagesRead,
                    'chat_messages_read',
                    'chats.pk=chat_messages_read.chat_pk'
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
                // .andWhere('chats.type = :type', { type: filters.type })
                // .andWhere('chat_participants.user_pk = :user_pk', { user_pk: user.pk })
                .andWhere(filters.role == 'end-user' ? new Brackets(qb => {
                    qb.where("chats.type = :type", { type: filters.type })
                        .andWhere("chat_participants.user_pk = :user_pk", { user_pk: user.pk })
                }) : '1=1')
                .andWhere(filters.hasOwnProperty('keyword') && filters.keyword != '' ? new Brackets(qb => {
                    qb.where("users.first_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.last_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                }) : '1=1')

                .andWhere(filters.role == 'admin' ? new Brackets(qb => {
                    qb.where("chats.type = :type", { type: filters.type })
                }) : '1=1')

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

    // async findOne(pk: any) {
    //     try {
    //         return await getRepository(Chat)
    //             .createQueryBuilder('chats')
    //             .select('chats')

    //             .leftJoinAndMapMany(
    //                 'chats.chat_participant',
    //                 ChatParticipant,
    //                 'chat_participants',
    //                 'chats.pk=chat_participants.chat_pk'
    //             )
    //             .where('chats.pk = :pk', { pk })
    //             .getOne()
    //             ;
    //     } catch (error) {
    //         console.log(error);
    //         // SAVE ERROR
    //         return {
    //             status: false
    //         }
    //     }
    // }

    async findByUser(pk: any, user: any, query: any) {
        try {
            const entityManager = getManager();
            return await entityManager.query(`
            select
                chats.*
            from chats
            left join chat_participants on (chats.pk = chat_participants.chat_pk)
            where chats.type = $1
            group by chats.pk, uuid
            having $2 = ANY(array_agg(chat_participants.user_pk)) and $3 = ANY(array_agg(chat_participants.user_pk))
            `, [query.type, pk, user.pk]);
            // return await getRepository(Chat)
            //     .createQueryBuilder('chats')
            //     .select('chats')

            //     .leftJoinAndMapOne(
            //         'chats.chat_participant',
            //         ChatParticipant,
            //         'chat_participants',
            //         'chats.pk=chat_participants.chat_pk'
            //     )
            //     .where('chats.archived=false')
            //     // .andWhere('chat_participants.user_pk in (:...user_pk)', { user_pk: [pk, user.pk] })
            //     .having('2 = ANY(array_agg(chat_participants.user_pk))')
            //     .having('1 = ANY(array_agg(chat_participants.user_pk))')
            //     .setParameter('user_pk', pk)
            //     .setParameter('created_by', user.pk)
            //     .groupBy('chats.pk')
            //     .groupBy('chats.uuid')
            //     .orderBy('chats.last_message_date', 'DESC')
            //     .getOne()
            //     ;
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
        // console.log(data, user);
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

                    // await EntityManager.update(ChatParticipant, { chat_pk: chat.pk }, { unread: true }); // set all participants to unread true then,
                    // await EntityManager.update(ChatParticipant, { chat_pk: chat.pk, user_pk: user.pk }, { unread: false }); // set sender to unread false

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

    async findMessage(pk: any) {
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
                .where('chat_messages.pk = :pk', { pk })
                .getOneOrFail()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async findMessages(pk: any, filters: any, user: any) {
        // console.log('findMessages', filters);
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

    async getMessages(pk: any, user: any) {
        // console.log('get unread messages', pks, user.pk);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        try {
            return await getRepository(ChatMessage)
                .createQueryBuilder('chat_messages')
                .select('chat_messages')
                .andWhere("chat_messages.chat_pk IN (:...pk)", { pk: [pk] })
                .getMany()
                ;
        } catch (err) {
            console.log(err);
            return [];
        } finally {
            // console.log('finally...');
        }
    }

    async getMessageRead(pk: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        try {
            return await getRepository(ChatMessagesRead)
                .createQueryBuilder('chat_messages_read')
                .select('chat_messages_read')
                .andWhere("chat_messages_read.chat_message_pk = :pk", { pk })
                .andWhere("chat_messages_read.user_pk = :user_pk", { user_pk: user.pk })
                .getMany()
                ;
        } catch (err) {
            console.log(err);
            return [];
        } finally {
            // console.log('finally...');
        }
    }

    async setReadMessage(pk: any, message_pk: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const messageRead = new ChatMessagesRead();
                    messageRead.chat_pk = pk;
                    messageRead.chat_message_pk = message_pk;
                    messageRead.user_pk = user.pk;
                    messageRead.read = true;
                    const ret = await EntityManager.save(messageRead);

                    return { status: true, data: ret };
                });

        } catch (err) {
            console.log(err);
            return [];
        } finally {
            // console.log('finally...');
        }
    }

    // async readMessages(chat_pk: any, user: any) {
    //     // console.log('read messages', chat_pk, user.pk);
    //     const queryRunner = getConnection().createQueryRunner();
    //     await queryRunner.connect();

    //     try {
    //         return await queryRunner.manager.transaction(
    //             async (EntityManager) => {
    //                 // console.log('chat pk', chat_pk);
    //                 return await getRepository(ChatMessage)
    //                     .createQueryBuilder('chat_messages')
    //                     .select('chat_messages')
    //                     .leftJoinAndSelect("chat_messages.chat_messages_read", "chat_messages_read")

    //                     .andWhere("chat_messages.chat_pk IN (:...pk)", { pk: [chat_pk] })
    //                     .getMany()
    //                     ;
    //                 // console.log('messages', messages);
    //                 // messages.forEach(message => {
    //                 //     console.log(message);
    //                 //     console.log(message['chat_message_read']);
    //                 //     // let found = false;
    //                 //     // message.chat_message_read.forEach(read => {
    //                 //     //     if (read.user_pk == user.pk) {
    //                 //     //         found = true;
    //                 //     //     }
    //                 //     // });
    //                 //     // console.log('found', found);
    //                 //     // if (!found) {
    //                 //     //     const message_read = new ChatMessageRead();
    //                 //     //     message_read.chat_pk = chat_pk;
    //                 //     //     message_read.chat_message_pk = message.pk;
    //                 //     //     message_read.user_pk = user.pk;
    //                 //     //     message_read.read = true;
    //                 //     //     EntityManager.save(message_read);
    //                 //     // }
    //                 // });
    //                 // console.log('user', user.pk);
    //                 // console.log('messages', messages);
    //                 // await EntityManager.update(ChatParticipant, { chat_pk, user_pk: user.pk }, { unread: false });
    //                 // return { status: true };
    //             }
    //         );
    //     } catch (err) {
    //         console.log(err);
    //         return [];
    //     } finally {
    //         // console.log('finally...');
    //     }
    // }
}
