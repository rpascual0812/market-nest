import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, getConnection, Any, Brackets } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { Account } from 'src/accounts/entities/account.entity';
import { Document } from 'src/documents/entities/document.entity';
import { UserDocument } from './entities/user-document.entity';
import { UserAddress } from './entities/user-address.entity';
import { SellerAddress } from 'src/seller/entities/seller-address.entity';
import { UserFollow } from './entities/user-follow.entity';

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
    create(user, account_pk) {
        const obj: any = {
            uuid: uuidv4(),
            last_name: user.last_name,
            first_name: user.first_name,
            middle_name: user.middle_name,
            birthdate: user.birthday,
            mobile_number: user.mobile,
            email_address: user.email,
            account_pk: account_pk,
            country_pk: 173
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
                // .leftJoinAndSelect("users.user_document", "user_documents")
                .select('users')
                .addSelect(["accounts.pk", "accounts.username", "accounts.active", "accounts.verified"])
                .addSelect(['genders.pk', 'genders.name'])
                // .addSelect(['user_documents'])
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
                // .andWhere(new Brackets(qb => {
                //     qb.where('users.first_name ILIKE :search', { search: `%${filters.search}%` })
                //         .orWhere('users.last_name ILIKE :search', { search: `%${filters.search}%` });
                // }))
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
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async findOne(data: any) {
        return await getRepository(User)
            .createQueryBuilder('users')
            .select('users')
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
            .where("users.pk = :pk", { pk: data.pk })
            .getOne()
            ;
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
        return {
            affected: 1
        };
        // change to add row to documents table
        // return await getRepository(User)
        //     .createQueryBuilder('users')
        //     .update()
        //     .set({ photo: file.path })
        //     .where("account_pk = :pk", { pk: user.pk })
        //     .execute();
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

    async getUserAddresses(pks: any, filters: any) {
        try {
            return await getRepository(UserAddress)
                .createQueryBuilder('user_addresses')
                .select('user_addresses')
                .leftJoinAndSelect("user_addresses.province", "provinces")
                .leftJoinAndSelect("user_addresses.city", "cities")
                .leftJoinAndSelect("user_addresses.area", "areas")
                .where("user_addresses.user_pk IN (:...user_pk)", { user_pk: pks })
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async getSellerAddresses(pks: any, filters: any) {
        try {
            return await getRepository(SellerAddress)
                .createQueryBuilder('seller_addresses')
                .select('seller_addresses')
                .leftJoinAndSelect("seller_addresses.province", "provinces")
                .leftJoinAndSelect("seller_addresses.city", "cities")
                .leftJoinAndSelect("seller_addresses.area", "areas")
                .where("seller_addresses.seller_pk IN (:...seller_pk)", { seller_pk: pks })
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async getUserFollowing(pks: any, filters: any) {
        try {
            return await getRepository(UserFollow)
                .createQueryBuilder('user_follow')
                .select('user_follow')
                .leftJoinAndSelect("user_follow.user", "users")
                .leftJoinAndSelect("users.user_document", "user_documents")
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'documents',
                    'user_documents.document_pk=documents.pk',
                )
                .where("user_follow.created_by IN (:...pk)", { pk: pks })
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;

        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async getUserFollower(pks: any, filters: any) {
        try {
            return await getRepository(UserFollow)
                .createQueryBuilder('user_follow')
                .select('user_follow')
                .leftJoinAndSelect("user_follow.createdBy", "users")
                .leftJoinAndSelect("users.user_document", "user_documents")
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'documents',
                    'user_documents.document_pk=documents.pk',
                )
                .where("user_follow.user_pk IN (:...pk)", { pk: pks })
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;

        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    // async getUserFollowing(pks: any) {
    //     try {
    //         return await getRepository(UserFollow)
    //             .createQueryBuilder('user_follow')
    //             .select('product_pk')
    //             .addSelect('sum(rating) as total')
    //             .addSelect('count(pk) as count')
    //             .where("product_ratings.product_pk IN (:...pk)", { pk: pks })
    //             .groupBy('product_pk')
    //             .getRawAndEntities()
    //             ;
    //     } catch (error) {
    //         console.log(error);
    //         // SAVE ERROR
    //         return {
    //             status: false
    //         }
    //     }
    // }


}
