import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { ComplaintMessage } from './entities/complaint-message.entity';
import { Complaint } from './entities/complaint.entity';
import { Document } from 'src/documents/entities/document.entity';
import { UserDocument } from 'src/users/entities/user-document.entity';

@Injectable()
export class ComplaintsService {
    async findAll(filters: any) {
        try {
            const complaints = await getRepository(Complaint)
                .createQueryBuilder('complaints')
                .select('complaints')
                .andWhere(
                    filters.hasOwnProperty('keyword') && filters.keyword != '' ?
                        "complaints.subject ILIKE :keyword" : "1=1",
                    { keyword: `%${filters.keyword}%` }
                )
                .andWhere("complaints.status = :status", { status: filters.status })
                .andWhere("complaints.type = :type", { type: filters.type })
                .leftJoinAndSelect("complaints.user", "users")
                .orderBy('complaints.date_created', 'DESC')
                .getManyAndCount()
                ;

            return {
                status: true,
                data: complaints[0],
                total: complaints[1]
            }
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async findMessages(pk: any) {
        try {
            return await getRepository(ComplaintMessage)
                .createQueryBuilder('complaint_messages')
                .select('complaint_messages')
                .andWhere("complaint_messages.complaint_pk = :pk", { pk: parseInt(pk) })
                .leftJoinAndSelect("complaint_messages.user", "users")
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
                .orderBy('complaint_messages.date_created')
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

    @UsePipes(ValidationPipe)
    async save(form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let complaint = null;
                    if (form.pk) {
                        complaint = await complaint.findOne({
                            pk: form.pk
                        });
                    }
                    else {
                        complaint = new complaint();
                    }

                    const lastOrder = await getRepository(complaint)
                        .createQueryBuilder('complaints')
                        .orderBy('"order"', "DESC")
                        .getOne();

                    complaint.question = form.question;
                    complaint.answer = form.answer;
                    complaint.user_pk = user.pk;
                    const _complaint = await EntityManager.save(complaint);

                    // LOGS
                    const log = new Log();
                    log.model = 'complaints';
                    log.model_pk = complaint.pk;
                    log.details = JSON.stringify({
                        type: form.type,
                        subject: form.subject,
                        user_pk: user.pk,
                        status: 'Open'
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: complaint };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    @UsePipes(ValidationPipe)
    async sendMessage(pk: any, form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const message = new ComplaintMessage();
                    message.complaint_pk = pk;
                    message.message = form.message;
                    message.user_pk = user.pk;
                    const _message = await EntityManager.save(message);

                    // LOGS
                    const log = new Log();
                    log.model = 'complaint_messages';
                    log.model_pk = _message.pk;
                    log.details = JSON.stringify({
                        complaint_pk: pk,
                        message: form.message,
                        user_pk: user.pk,
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: _message };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    @UsePipes(ValidationPipe)
    async update(pk: any, body: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const fields = { 'status': body.status };
                    const filters = { 'pk': pk };
                    const res = await EntityManager.update(Complaint, filters, fields);

                    // LOGS
                    const log = new Log();
                    log.model = 'complaints';
                    log.model_pk = pk;
                    log.details = JSON.stringify({
                        status: body.status
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: res };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }
}
