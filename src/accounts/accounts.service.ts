import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import dataSource from 'db/data-source';
import { Account } from './entities/account.entity';
import * as bcrypt from 'bcrypt';
import { UserDocument } from '../users/entities/user-document.entity';
import { Document } from '../documents/entities/document.entity';
import { Email } from '../emails/entities/email.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AccountsService {
    private saltOrRounds = 10;

    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
        @InjectRepository(Email)
        private emailRepository: Repository<Email>
    ) { }

    // create(createAccountDto: CreateAccountDto) {
    //     return 'This action adds a new account';
    // }
    create(account: any): Promise<any | undefined> {
        const obj: any = {
            username: account.username,
            password: account.password
        }

        const newAccount = this.accountRepository.create(obj);
        return this.accountRepository.save(newAccount);
    }

    findAll() {
        return `This action returns all accounts`;
    }

    findOne(pk: number) {
        // return this.accountRepository.findOne({ where: { pk } });
        return dataSource.getRepository(Account)
            .createQueryBuilder('accounts')
            .select(['accounts.username', 'accounts.verified'])
            .leftJoinAndSelect("accounts.user", "users")
            .leftJoinAndSelect("users.seller", "sellers")
            .leftJoinAndSelect("users.gender", "genders")
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
            .where("accounts.pk = :pk", { pk })
            .andWhere("accounts.archived = :archived", { archived: false })
            .getOne()
            ;
    }

    async findToken(token: string) {
        return await dataSource.getRepository(Account)
            .createQueryBuilder('accounts')
            .where(`accounts.password_reset::JSONB @> '{"token": "${token}" }'`)
            .getOne();
    }

    async findByUserName(username: string): Promise<Account | undefined> {
        const pk = Number.isInteger(Number(username)) ? Number(username) : null;
        return await dataSource.getRepository(Account)
            .createQueryBuilder('accounts')
            .where(`accounts.username = :username or accounts.pk = :pk`, { username, pk })
            .getOne();
    }

    async update(pk: number, fields: object): Promise<any> {
        return await dataSource.getRepository(Account)
            .createQueryBuilder()
            .update(Account)
            .set(fields)
            .where("pk = :pk", { pk })
            .execute();
    }

    remove(id: number) {
        return `This action removes a #${id} account`;
    }

    async getHash(password: string | undefined): Promise<string> {
        return await bcrypt.hash(password, this.saltOrRounds);
    }

    async compareHash(password: string | undefined, hash: string | undefined): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

    async requestDeletion(email_address: string): Promise<any> {
        // Find user by email address
        const user = await dataSource.getRepository('users')
            .createQueryBuilder('users')
            .where('users.email_address = :email_address', { email_address })
            .getOne();

        if (!user) {
            throw new Error('User not found');
        }

        // Get the associated account
        const account = await dataSource.getRepository(Account)
            .createQueryBuilder('accounts')
            .where('accounts.pk = :account_pk', { account_pk: user.account_pk })
            .getOne();

        if (!account) {
            throw new Error('Account not found');
        }

        // Generate a unique deletion token
        const token = require('crypto').randomBytes(32).toString('hex');
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24); // Token expires in 24 hours

        // Store the deletion token
        await this.update(account.pk, {
            deletion_token: {
                token,
                email_address,
                created_at: new Date(),
                expires_at: expiresAt
            }
        });

        // Default email template
        const defaultSubject = 'Account Deletion Confirmation';
        const defaultBody = `<h2>Account Deletion Request</h2><p>Hi {first_name},</p><p>You have requested to delete your account. To confirm the deletion, please click the link below:</p><p><a href="{confirmation_link}" style="display: inline-block; padding: 10px 20px; background-color: #dc3545; color: white; text-decoration: none; border-radius: 4px;">Confirm Account Deletion</a></p><p>This link will expire in 24 hours.</p><p>If you did not request this, please ignore this email.</p><p>Best regards,<br>The Samdhana Team</p>`;

        // Fetch email template from configuration
        let subject = defaultSubject;
        let emailBody = defaultBody;

        try {
            const templateSubject = await dataSource.getRepository('configuration')
                .createQueryBuilder('configuration')
                .where('configuration.group = :group AND configuration.name = :name',
                    { group: 'email_templates', name: 'delete_account_subject' })
                .getOne();

            const templateBody = await dataSource.getRepository('configuration')
                .createQueryBuilder('configuration')
                .where('configuration.group = :group AND configuration.name = :name',
                    { group: 'email_templates', name: 'delete_account_email' })
                .getOne();

            if (templateSubject) {
                subject = templateSubject.value;
            }

            if (templateBody) {
                emailBody = templateBody.value;
            }
        } catch (error) {
            console.log('Error fetching email template:', error);
        }

        // Always replace variables in template (custom or default)
        emailBody = emailBody.replace(/\{first_name\}/g, user.first_name || '');
        emailBody = emailBody.replace(/\{middle_name\}/g, user.middle_name || '');
        emailBody = emailBody.replace(/\{last_name\}/g, user.last_name || '');
        emailBody = emailBody.replace(/\{confirmation_link\}/g, `${process.env.FRONTEND_URL || 'http://localhost:4200'}/account/confirm-deletion/${token}`);

        const emailRecord = new Email();
        emailRecord.uuid = uuidv4();
        emailRecord.from = 'noreply@samdhana.com';
        emailRecord.from_name = 'Samdhana Support';
        emailRecord.to = email_address;
        emailRecord.to_name = `${user.first_name} ${user.last_name}`;
        emailRecord.subject = subject;
        emailRecord.body = emailBody;
        emailRecord.user_pk = user.pk;
        emailRecord.sent = 'false';

        await this.emailRepository.save(emailRecord);

        return {
            message: 'Deletion confirmation email sent'
        };
    }

    async confirmDeletion(token: string): Promise<any> {
        // Find account by deletion token
        const account = await dataSource.getRepository(Account)
            .createQueryBuilder('accounts')
            .where(`accounts.deletion_token::JSONB @> '{"token": "${token}"}'`)
            .getOne();

        if (!account) {
            throw new Error('Invalid or expired deletion token');
        }

        // Check if token has expired
        const tokenData = account.deletion_token;
        if (new Date() > new Date(tokenData.expires_at)) {
            throw new Error('Deletion token has expired');
        }

        // Archive the account
        await this.update(account.pk, {
            archived: true,
            deletion_token: null
        });

        return {
            message: 'Account successfully deleted'
        };
    }
}