import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { v4 as uuidv4 } from 'uuid';
import { AccountsService } from 'src/accounts/accounts.service';
import { EmailsService } from 'src/emails/emails.service';
import { SessionsService } from 'src/sessions/sessions.service';
import { UsersService } from 'src/users/users.service';
import { getConnection, getRepository, Repository } from 'typeorm';
import { Account } from 'src/accounts/entities/account.entity';
import { DateTime } from "luxon";
import { resolveObjectURL } from 'buffer';
import { User } from 'src/users/entities/user.entity';
import { UserDocument } from 'src/users/user-documents/entities/user-document.entity';
import { UserAddress } from 'src/users/user-addresses/entities/user-address.entity';
import { Email } from 'src/emails/entities/email.entity';

@Injectable()
export class AuthService {

    constructor(
        private accountsService: AccountsService,
        private sessionsService: SessionsService,
        private emailsService: EmailsService,
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const account = await this.accountsService.findByUserName(username);

        if (account && await this.accountsService.compareHash(password, account.password)) {
            return account;
        }
    }

    async login(account: any) {
        const payload = { name: account.username, sub: account.pk };

        account.access_token = this.jwtService.sign(payload);
        account.expiration = DateTime.now().plus({ seconds: Number.parseInt(process.env.EXPIRES) }).toFormat('y-LL-dd HH:mm:ss');

        this.sessionsService.create(account);

        // IMPROVE
        // websocket
        // send to all logged user that they are logged out

        const { pk, password, verified, active, date_created, archived, password_reset, ...others } = account;
        return others;
    }

    async logout(user: any) {
        return await this.sessionsService.removeByAccount(user.account.pk);
    }

    async forgotPassword(data: any) {
        const user = await this.usersService.findByEmail(data.email);
        if (user) {
            const uuid = uuidv4();
            const fields = { password_reset: { token: uuid, expiration: DateTime.now().plus({ hours: 1 }) } };
            const updated = await this.accountsService.update(user.account_pk, fields);

            if (updated) {
                this.emailsService.account_pk = user.account_pk;
                this.emailsService.user_pk = user.pk;
                this.emailsService.from = process.env.SEND_FROM;
                this.emailsService.from_name = process.env.SENDER;
                this.emailsService.to = data.email;
                this.emailsService.to_name = user.first_name + ' ' + user.last_name;
                this.emailsService.subject = 'Password Reset';
                this.emailsService.body = '<a href="' + data.url + '/auth/reset-password/' + uuid + '">Please follow this link to reset your password</a>'; // MODIFY: must be a template from the database

                const newEmail = await this.emailsService.create();
                if (newEmail) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    async resetPassword(data: any): Promise<any> {
        const password = await this.accountsService.getHash(data.password);
        const account = await this.resetToken(data.token);

        const fields = { password };
        return await this.accountsService.update(account.pk, fields);
    }

    async resetToken(token: string): Promise<any> {
        return await this.accountsService.findToken(token);
    }

    async register(data: any): Promise<any> {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            data.password = await this.accountsService.getHash(data.password);
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    // create account                   
                    const account = new Account();
                    account.username = data.email;
                    account.password = data.password;
                    const newAccount = await EntityManager.save(account);

                    // create user
                    const uuid = uuidv4();
                    const user = new User();
                    user.uuid = uuid;
                    user.last_name = data.last_name;
                    user.first_name = data.first_name;
                    user.first_name = data.first_name;
                    user.birthdate = data.birthday;
                    user.mobile_number = data.mobile;
                    user.email_address = data.email;
                    user.role_pk = 1;
                    user.country_pk = 173;
                    user.account_pk = newAccount.pk;
                    const newUser = await EntityManager.save(user);

                    const address = new UserAddress;
                    address.type = 'home';
                    address.province_pk = 3;
                    address.city_pk = 2;
                    address.area_pk = 1;
                    address.address = data.address_details;
                    address.user_pk = newUser.pk;
                    await EntityManager.save(address);

                    // create documents
                    const display_photo = new UserDocument();
                    display_photo.user_pk = newUser.pk;
                    display_photo.type = 'profile_photo';
                    display_photo.document_pk = data.display_photo;
                    await EntityManager.save(display_photo);

                    const id_photo = new UserDocument();
                    id_photo.user_pk = newUser.pk;
                    id_photo.type = 'id_photo';
                    id_photo.document_pk = data.id_photo;
                    await EntityManager.save(id_photo);

                    // save registration email
                    const email = new Email;
                    email.uuid = uuidv4();
                    email.user_pk = newUser.pk;
                    email.from = process.env.SEND_FROM;
                    email.from_name = process.env.SENDER;
                    email.to = data.email;
                    email.to_name = newUser.first_name + ' ' + newUser.last_name;
                    email.subject = 'Get Started with Samdhana Community Market';
                    email.body = '<h1>Welcome to Samdhana Community Market</h1>'; // MODIFY: must be a template from the database
                    await EntityManager.save(email);

                    return { status: true, uuid: uuid };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }

        // data.password = await this.accountsService.getHash(data.password);
        // console.log(data);

        // const account = {
        //     username: data.email,
        //     password: data.password
        // }

        // const newAccount = await this.accountsService.create(account);
        // console.log(newAccount);
        // if (newAccount) {
        //     const newUser = await this.usersService.create(data, newAccount.pk);
        // }

        // return newAccount;
    }
}
