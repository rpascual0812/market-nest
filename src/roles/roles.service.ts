import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
    async findAll(filters: any) {
        // console.log(filters);
        try {
            const roles = await getRepository(Role)
                .createQueryBuilder('roles')
                .select('roles')
                .where('roles.archived=false')
                .orderBy('roles.name')
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;
            // console.log(roles);
            return {
                status: true,
                data: roles[0],
                total: roles[1]
            }
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }
}
