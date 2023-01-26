import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';
import { Document } from 'src/documents/entities/document.entity';

@Injectable()
export class FeedbackService {
    async save(body: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    // New Feedback
                    const feedback = new Feedback();
                    feedback.message = body.message;
                    feedback.user_pk = user.pk;
                    const newFeedback = await EntityManager.save(feedback);

                    // LOGS
                    const log = new Log();
                    log.model = 'complaints';
                    log.model_pk = newFeedback.pk;
                    log.details = JSON.stringify({
                        message: body.message,
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: newFeedback };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }
    }

    async findAll(filters: any) {
        try {
            const feedbacks = await getRepository(Feedback)
                .createQueryBuilder('feedbacks')
                .select('feedbacks')
                .andWhere(
                    filters.hasOwnProperty('keyword') && filters.keyword != '' ?
                        "feedbacks.message ILIKE :keyword" : "1=1",
                    { keyword: `%${filters.keyword}%` }
                )
                .leftJoinAndSelect("feedbacks.user", "users")
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
                .orderBy('feedbacks.date_created', 'DESC')
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;

            return {
                status: true,
                data: feedbacks[0],
                total: feedbacks[1]
            }
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }
}
