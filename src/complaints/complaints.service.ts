import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { Brackets, getConnection, getRepository, Repository } from 'typeorm';
import { ComplaintMessage } from './entities/complaint-message.entity';
import { Complaint } from './entities/complaint.entity';
import { Document } from 'src/documents/entities/document.entity';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { ComplaintDocument } from './entities/complaint-document.entity';

@Injectable()
export class ComplaintsService {
    async findAll(filters: any, user: any) {
        try {
            const complaints = await getRepository(Complaint)
                .createQueryBuilder('complaints')
                .select('complaints')
                .leftJoinAndSelect("complaints.user", "users")
                .leftJoinAndMapOne(
                    'complaints.complaint_document',
                    ComplaintDocument,
                    'complaint_documents',
                    'complaints.pk=complaint_documents.complaint_pk'
                )
                .leftJoinAndMapOne(
                    'complaint_documents.document',
                    Document,
                    'documents',
                    'complaint_documents.document_pk=documents.pk',
                )
                .andWhere(
                    filters.hasOwnProperty('keyword') && filters.keyword != '' ?
                        "complaints.subject ILIKE :keyword" : "1=1",
                    { keyword: `%${filters.keyword}%` }
                )
                .andWhere(filters.hasOwnProperty('status') && filters.status ? new Brackets(qb => {
                    qb.where("complaints.status = :status", { status: filters.status })
                }) : '1=1')
                .andWhere(filters.hasOwnProperty('type') && filters.type ? new Brackets(qb => {
                    qb.where("complaints.type = :type", { type: filters.type })
                }) : '1=1')
                .andWhere(filters.hasOwnProperty('user') && filters.user ? new Brackets(qb => {
                    qb.where("complaints.user_pk = :user_pk", { user_pk: user.pk })
                }) : '1=1')
                .orderBy('complaints.date_created', 'DESC')
                .skip(filters.skip)
                .take(filters.take)
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

    async findMessage(pk: any) {
        try {
            return await getRepository(ComplaintMessage)
                .createQueryBuilder('complaint_messages')
                .select('complaint_messages')
                .andWhere("complaint_messages.pk = :pk", { pk: parseInt(pk) })
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

    @UsePipes(ValidationPipe)
    async save(form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        // console.log('complaint', form);
        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    let complaint = null;
                    if (form.hasOwnProperty('pk')) {
                        complaint = await complaint.findOne({
                            pk: form.pk
                        });
                    }
                    else {
                        complaint = new Complaint();
                    }

                    complaint.type = form.type;
                    complaint.subject = form.subject;
                    complaint.user_pk = user.pk;
                    complaint.status = 'Open';
                    const _complaint = await EntityManager.save(complaint);

                    let message = new ComplaintMessage();
                    message.message = form.message;
                    message.complaint_pk = _complaint.pk;
                    message.user_pk = user.pk;
                    await EntityManager.save(message);

                    let document = new ComplaintDocument();
                    document.complaint_pk = _complaint.pk;
                    document.document_pk = form.product_photo;
                    await EntityManager.save(document);

                    // LOGS
                    const log = new Log();
                    log.model = 'complaints';
                    log.model_pk = complaint.pk;
                    log.details = JSON.stringify({
                        type: form.type,
                        subject: form.subject,
                        message: form.message,
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
            await queryRunner.release();
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
            await queryRunner.release();
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
            await queryRunner.release();
        }
    }
}
