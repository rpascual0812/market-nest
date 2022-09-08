import { BadRequestException, Catch, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getRepository, Repository, QueryFailedError, EntityNotFoundError, Like } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
@Catch(QueryFailedError, EntityNotFoundError)
export class DepartmentsService {
    constructor(
        @InjectRepository(Department)
        private departmentRepository: Repository<Department>,
    ) { }

    async create(user: any, data: any, pk: number) {
        let output: any;
        try {
            const query = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Department)
                .values([
                    {
                        // created_by: user.pk,
                        company_pk: user.company_pk,
                        name: data.name
                    }
                ])
                .returning("pk")
                .execute();

            if (query) {
                output = this.findById(user, query.raw[0].pk);
            }
        }
        catch (error: any) {
            console.log(1, error);
            throw new BadRequestException();
        }

        return output;
    }

    async store(user: any, data: any, pk: number) {
        let query: any;
        if (pk) {
            query = await this.departmentRepository
                .createQueryBuilder()
                .update(Department)
                .set(data)
                .where({
                    pk,
                })
                .returning('*')
                .execute();
        }

        let output: any;
        if (query) {
            output = await this.findById(user, query.raw[0].pk);
        }

        return output;
    }

    async findById(user: any, pk: number) {
        return await getRepository(Department)
            .createQueryBuilder('departments')
            .leftJoinAndSelect("departments.user", "users")
            .leftJoinAndSelect("departments.company", "companies")
            .select('departments')
            .addSelect(['users.pk', 'users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.account_pk'])
            .addSelect(['companies.pk', 'companies.name'])
            .where("departments.pk = :pk", { pk })
            .getOne()
            ;

        // IMPROVE
        // if fields can be expluded from the users, the use this code instead
        // return await Department.findOne({
        //     where: filters,
        //     join: {
        //         alias: "departments",
        //         leftJoinAndSelect: {
        //             "users": "departments.user"
        //         }
        //     }
        // });
    }

    async findAll(user: any, filters: any) {
        return await getRepository(Department)
            .createQueryBuilder('departments')
            // .leftJoinAndSelect("departments.user", "users")
            .leftJoinAndSelect("departments.company", "companies")
            .select('departments')
            // .addSelect(['users.pk', 'users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.account_pk'])
            .addSelect(['companies.pk', 'companies.name'])
            .where("departments.company_pk = :company_pk", { company_pk: user.company_pk })
            .andWhere('departments.archived = false')
            .andWhere('departments.name ILIKE :search', { search: `%${filters.search}%` })
            .orderBy('departments.pk', 'ASC')
            .skip(filters.skip)
            .take(filters.take)
            .getManyAndCount()
            ;
    }

    async findSelect(user: any) {
        return await getRepository(Department)
            .createQueryBuilder('departments')
            // .leftJoinAndSelect("departments.user", "users")
            .leftJoinAndSelect("departments.company", "companies")
            .select('departments')
            // .addSelect(['users.pk', 'users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.account_pk'])
            .addSelect(['companies.pk', 'companies.name'])
            .where("departments.company_pk = :company_pk", { company_pk: user.company_pk })
            .andWhere('departments.archived = false')
            .orderBy('departments.pk', 'ASC')
            .getManyAndCount()
            ;
    }
}
