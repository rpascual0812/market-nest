import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

import { DateTime } from "luxon";

@Injectable()
export class SessionsService {
    constructor(
        @InjectRepository(Session)
        private sessionRepository: Repository<Session>,
    ) { }

    // create(createSessionDto: CreateSessionDto) {
    //     return 'This action adds a new session';
    // }
    @UsePipes(ValidationPipe)
    async create(account: any): Promise<any> {
        this.removeByAccount(account.pk);

        const obj: any = {
            token: account.access_token,
            expiration: account.expiration,
            account: account.pk,
        }

        const newSession = this.sessionRepository.create(obj);
        return this.sessionRepository.save(newSession);
    }

    findAll() {
        return `This action returns all sessions`;
    }

    findOne(id: number) {
        return `This action returns a #${id} session`;
    }

    update(id: number, updateSessionDto: UpdateSessionDto) {
        return `This action updates a #${id} session`;
    }

    async removeByAccount(pk: number): Promise<any> {
        // console.log('delete', pk);
        return await getConnection()
            .createQueryBuilder()
            .delete()
            .from('sessions')
            .where({ account: pk })
            .execute()
            ;
    }

    async deleteWhere(data: any) {

    }
}
