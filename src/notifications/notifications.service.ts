import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { Repository } from 'typeorm';
import dataSource from 'db/data-source';
import { Notification } from './entities/notification.entity';
import { Document } from 'src/documents/entities/document.entity';

import { User } from 'src/users/entities/user.entity';

import admin from '../firebase/firebase.provider';

@Injectable()
export class NotificationsService {
    async findAll(user: any) {
        try {
            const notifications = await dataSource.getRepository(Notification)
                .createQueryBuilder('notifications')
                .select('notifications')

                .leftJoinAndSelect("notifications.user", "users")
                .leftJoinAndMapOne(
                    'users.user_document',
                    UserDocument,
                    'user_documents',
                    'users.pk=user_documents.user_pk and user_documents.type = \'profile_photo\''
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'documents',
                    'user_documents.document_pk=documents.pk',
                )

                .leftJoinAndSelect("notifications.sender", "sender")
                .leftJoinAndMapOne(
                    'sender.user_document',
                    UserDocument,
                    'user_docs',
                    'sender.pk=user_docs.user_pk and user_docs.type = \'profile_photo\''
                )
                .leftJoinAndMapOne(
                    'user_docs.document',
                    Document,
                    'docs',
                    'user_docs.document_pk=docs.pk',
                )
                .where('notifications.user_pk = :pk', { pk: user.pk })

                .orderBy('notifications.date_created', 'DESC')
                .getManyAndCount()
                ;

            return {
                status: true,
                data: notifications[0],
                total: notifications[1]
            }
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async sendPushNotification(
        user_pk: number,
        title: string,
        body: string,
        data?: Record<string, string>,
    ) {
        const user = await dataSource.getRepository(User).findOne({ where: { pk: user_pk } });
        const message: admin.messaging.Message = {
            token: user.fcm_token,

            notification: {
                title,
                body,
            },

            data,

            android: {
                notification: {
                    clickAction: 'FLUTTER_NOTIFICATION_CLICK',
                },
            },
        };

        return admin.messaging().send(message);
    }

}
