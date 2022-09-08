import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { AuthService } from 'src/auth/auth.service';
import { createQueryBuilder, getConnection, getRepository, Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
    private saltOrRounds = 10;

    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
        // authService: AuthService
    ) { }

    // create(createAccountDto: CreateAccountDto) {
    //     return 'This action adds a new account';
    // }
    create(account: any): Promise<any | undefined> {
        const obj: any = {
            username: account.email,
            password: account.password
        }

        const newAccount = this.accountRepository.create(obj);
        return this.accountRepository.save(newAccount);
    }

    findAll() {
        return `This action returns all accounts`;
    }

    findOne(pk: number) {
        return this.accountRepository.findOne({ where: { pk } });
    }

    async findToken(token: string) {
        return await getRepository(Account)
            .createQueryBuilder('accounts')
            .where(`accounts.password_reset::JSONB @> '{"token": "${token}" }'`)
            .getOne();
    }

    async findByUserName(username: String): Promise<Account | undefined> {
        return this.accountRepository.findOne({ where: { username } });
    }

    async update(pk: number, fields: object): Promise<any> {
        return await getRepository(Account)
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
}
