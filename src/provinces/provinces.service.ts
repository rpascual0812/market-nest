import { Injectable } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, getRepository } from 'typeorm';
import { Province } from './entities/province.entity';
import { DateTime } from "luxon";

@Injectable()
export class ProvincesService {

    async findAll(filters: any) {
        console.log('filters', filters);
        try {
            const users = await getRepository(Province)
                .createQueryBuilder('provinces')
                .andWhere(
                    filters.hasOwnProperty('keyword') && filters.keyword != '' ?
                        "(name ILIKE :keyword or province_code::text ILIKE :keyword)" :
                        '1=1', { keyword: `%${filters.keyword}%` }
                )
                .andWhere("archived = :archived", { archived: `${filters && filters.hasOwnProperty('archived') ? filters.archived : false}` })
                .skip(filters.skip)
                .take(filters.take)
                .orderBy('provinces.name')
                .getManyAndCount()
                ;

            return {
                status: true,
                data: users[0],
                total: users[1]
            }
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async update(data: any, user: any) {
        // console.log('updating user', data);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const province = await EntityManager.findOne(Province, data.pk);
                    province.province_code = data.province_code;
                    province.name = data.name;
                    const updatedProvince = await EntityManager.save(province);

                    // LOGS
                    const log = new Log();
                    log.model = 'provinces';
                    log.model_pk = data.pk;
                    log.details = JSON.stringify({
                        province_code: data.province_code,
                        name: data.name,
                        user_pk: user.pk,
                        date_created: DateTime.now
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: updatedProvince };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }

    }

    async delete(code: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const province = await EntityManager.findOne(Province, code);
                    province.archived = true;
                    const updatedProvince = await EntityManager.save(province);

                    // LOGS
                    const log = new Log();
                    log.model = 'products';
                    log.model_pk = code;
                    log.details = JSON.stringify({
                        user_pk: user.pk,
                        status: 'deleted',
                        date_created: DateTime.now
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: updatedProvince };
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
