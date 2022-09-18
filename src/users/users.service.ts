import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, getConnection, Any, Brackets } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { Account } from 'src/accounts/entities/account.entity';

// export type User = {
//     id: number;
//     name: string;
//     username: string;
//     password: string;
// }

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    // create(createUserDto: CreateUserDto) {
    //     return 'This action adds a new user';
    // }
    create(user, account_id) {
        const obj: any = {
            uuid: uuidv4(),
            last_name: user.last_name,
            first_name: user.first_name,
            middle_name: user.middle_name,
            birthdate: user.year + '-' + user.month + '-' + user.day,
            mobile_number: user.mobile,
            email_address: user.email,
            account: account_id
        }

        const newUser = this.userRepository.create(obj);
        return this.userRepository.save(newUser);
    }

    async findAll(data: any, filters: any) {
        try {
            const users = await getRepository(User)
                .createQueryBuilder('users')
                .leftJoinAndSelect("users.account", "accounts")
                .leftJoinAndSelect("users.gender", "genders")
                .select('users')
                .addSelect(["accounts.pk", "accounts.username", "accounts.active", "accounts.verified"])
                .addSelect(['genders.pk', 'genders.name'])
                .andWhere(new Brackets(qb => {
                    qb.where('users.first_name ILIKE :search', { search: `%${filters.search}%` })
                        .orWhere('users.last_name ILIKE :search', { search: `%${filters.search}%` });
                }))
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;

            return {
                status: true,
                data: users[0],
                total: users[1]
            }
        } catch (error) {
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async find(account: any) {
        return await getRepository(User)
            .createQueryBuilder('users')
            .leftJoinAndSelect("users.account", "accounts")
            .select('users')
            .addSelect(["accounts.pk", "accounts.username", "accounts.active", "accounts.verified"])
            .where("accounts.pk = :pk", { pk: account.pk })
            .getOne()
            ;
    }

    async findByEmail(email_address: String): Promise<User | undefined> {
        return await getRepository(User)
            .createQueryBuilder('users')
            .where("email_address = :email_address", { email_address })
            .orderBy('pk', 'DESC')
            .getOne()
            ;
    }

    async uploadPhoto(user: any, file: any) {
        return await getRepository(User)
            .createQueryBuilder('users')
            .update()
            .set({ photo: file.path })
            .where("account_pk = :pk", { pk: user.pk })
            .execute();
    }

    async findLast(user: any) {
        return await getRepository(User)
            .createQueryBuilder('users')
            .leftJoinAndSelect("users.account", "accounts")
            .select('users')
            .addSelect(["accounts.pk", "accounts.username", "accounts.active", "accounts.verified"])
            .orderBy('users.pk', 'DESC')
            .getOne()
            ;
    }



    // async findOne(id: number): Promise<User | undefined> {
    //     return `This action returns a #${id} account`;
    //     // return this.users.find(user => user.id === id);
    // }

    // update(id: number, updateUserDto: UpdateUserDto) {
    //     return `This action updates a #${id} user`;
    // }

    // remove(id: number) {
    //     return `This action removes a #${id} user`;
    // }
}
