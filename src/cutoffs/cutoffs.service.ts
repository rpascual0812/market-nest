import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { CreateCutoffDto } from './dto/create-cutoff.dto';
import { UpdateCutoffDto } from './dto/update-cutoff.dto';

import { v4 as uuidv4 } from 'uuid';
import { Cutoff } from './entities/cutoff.entity';

@Injectable()
export class CutoffsService {
    constructor(
        @InjectRepository(Cutoff)
        private cutoffRepository: Repository<Cutoff>,
    ) { }

    store(user: any, data: any, pk: number) {

        let output: any;
        if (pk) {
            output = this.cutoffRepository
                .createQueryBuilder()
                .update(Cutoff)
                .set({
                    date_from: data.date_from,
                    date_to: data.date_to
                })
                .where({
                    pk,
                })
                .returning('*')
                .execute();
        }
        else {
            const uuid = uuidv4();

            const obj: any = {
                uuid: uuid,
                user_pk: user.pk,
                company_pk: user.company_pk,
                date_from: data.from,
                date_to: data.to
            }

            const cutoff = this.cutoffRepository.create(obj);
            output = this.cutoffRepository.save(cutoff);
        }

        return output;
    }

    async findAll(user: any) {
        return await getRepository(Cutoff)
            .createQueryBuilder('cutoffs')
            .leftJoinAndSelect("cutoffs.user", "users")
            .select('cutoffs')
            .addSelect(['users.pk', 'users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.account_pk'])
            .where("cutoffs.company_pk = :company_pk", { company_pk: user.company_pk })
            .orderBy('cutoffs.pk', 'ASC')
            .getMany()
            ;
    }
}
