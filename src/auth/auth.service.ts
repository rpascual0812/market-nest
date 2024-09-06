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
import { UserDocument } from 'src/users/entities/user-document.entity';
import { UserAddress } from 'src/users/entities/user-address.entity';
import { Email } from 'src/emails/entities/email.entity';
import { SellerService } from 'src/seller/seller.service';
import { Role } from 'src/roles/entities/role.entity';
import { Configuration } from 'src/configuration/entities/configuration.entity';

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

        let user = await this.accountsService.findOne(account.pk);
        if (user.user.role_pk != account.role_pk) {
            return {};
        }

        // get seller
        account.seller_pk = 0;
        if (user && user.user && user.user.seller != null) {
            account.seller_pk = user.user.seller.pk;
        }

        // IMPROVE
        // websocket
        // send to all logged user that they are logged out
        const { pk, password, verified, active, date_created, archived, password_reset, ...others } = account;
        const user_data = {
            ...others,
            first_name: user.user.first_name,
            last_name: user.user.last_name,
            middle_name: user.user.middle_name,
            country_pk: user.user.country_pk,
            user_document: user.user.user_document
        }
        return user_data;
    }

    async logout(user: any) {
        return await this.sessionsService.removeByAccount(user.account.pk);
    }

    async forgotPassword(data: any) {
        // console.log(data);
        const user = await this.usersService.findByEmail(data.email);
        // console.log(user);
        if (user) {
            let uuid = uuidv4();

            if (data.device == 'mobile') {
                let randomNumbers = [];
                for (let i = 0; i < 4; i++) {
                    const num = Math.floor(Math.random() * 10);
                    randomNumbers.push(num);
                }

                uuid = randomNumbers.join('');
            }
            // console.log('uuid', uuid);
            const fields = data.device == 'mobile' ? { password_reset: { token: uuid, expiration: DateTime.now().plus({ hours: 1 }) } } : { password_reset: { token: uuid, expiration: DateTime.now().plus({ hours: 1 }) } };
            const updated = await this.accountsService.update(user.account_pk, fields);

            if (updated) {
                this.emailsService.account_pk = user.account_pk;
                this.emailsService.user_pk = user.pk;
                this.emailsService.from = process.env.SEND_FROM;
                this.emailsService.from_name = process.env.SENDER;
                this.emailsService.to = data.email;
                this.emailsService.to_name = user.first_name + ' ' + user.last_name;
                this.emailsService.subject = 'Password Reset';
                this.emailsService.body = data.device == 'mobile' ? uuid : '<a href="' + data.url + '/reset-password/' + uuid + '">Please follow this link to reset your password</a>'; // MODIFY: must be a template from the database

                const newEmail = await this.emailsService.create();
                if (newEmail) {
                    return {
                        status: true, data: fields
                    };
                }
                return {
                    status: true, data: fields
                };
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
        console.log('register', data);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            data.password = await this.accountsService.getHash(data.password);
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const welcome_email_body = await Configuration.findOne({
                        group: 'email_templates',
                        name: 'welcome_email'
                    });

                    const welcome_email_subject = await Configuration.findOne({
                        group: 'email_templates',
                        name: 'welcome_subject'
                    });

                    let registration_email = welcome_email_body['value'];
                    registration_email = registration_email.replace(/{first_name}/g, data.first_name);
                    registration_email = registration_email.replace(/{middle_name}/g, data.middle_name);
                    registration_email = registration_email.replace(/{last_name}/g, data.last_name);

                    // create account                   
                    const account = new Account();
                    account.username = data.email;
                    account.password = data.password;
                    const newAccount = await EntityManager.save(account);

                    const role = await Role.findOne({
                        name: 'end-user'
                    });

                    // create user
                    const uuid = uuidv4();
                    const user = new User();
                    user.uuid = uuid;
                    user.last_name = data.last_name;
                    user.first_name = data.first_name;
                    user.middle_name = data.middle_name;
                    user.birthdate = data.birthday;
                    user.mobile_number = data.mobile;
                    user.email_address = data.email;
                    user.about = data.about;
                    user.role_pk = role.pk;
                    user.country_pk = 173;
                    user.account_pk = newAccount.pk;
                    const newUser = await EntityManager.save(user);

                    const address = new UserAddress;
                    address.type = 'home';
                    address.province_code = data.province;
                    address.city_code = data.city;
                    address.area_pk = data.area;
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
                    email.subject = welcome_email_subject ? welcome_email_subject['value'] : 'Get Started with Lambo Mag-uuma';
                    email.body = registration_email;
                    await EntityManager.save(email);

                    return { status: true, uuid: uuid };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
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
