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
import { Log } from 'src/logs/entities/log.entity';
import { UserRating } from './entities/user-rating.entity';
import { Province } from 'src/provinces/entities/province.entity';
import { City } from 'src/cities/entities/city.entity';
import { Area } from 'src/areas/entities/area.entity';
import { Notification } from 'src/notifications/entities/notification.entity';

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
        @InjectRepository(UserDocument)
        private userDocumentRepository: Repository<UserDocument>,
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
        // console.log(obj);
        const newUser = this.userRepository.create(obj);
        return this.userRepository.save(newUser);
    }

    async findAll(data: any, filters: any) {
        try {
            let orderByColumn,
                orderByDirection;
            if (filters.hasOwnProperty('orderBy')) {
                switch (filters.orderBy) {
                    case 'Sort by Name':
                        orderByColumn = 'users.first_name';
                        orderByDirection = 'ASC';
                        break;
                    default:
                        orderByColumn = 'users.date_created';
                        orderByDirection = 'DESC';
                }
            }
            else {
                orderByColumn = 'users.pk';
                orderByDirection = 'ASC';
            }

            const users = await getRepository(User)
                .createQueryBuilder('users')
                .select('users')
                .leftJoinAndSelect("users.account", "accounts")
                .addSelect(["accounts.pk", "accounts.username", "accounts.active", "accounts.verified"])
                .leftJoinAndSelect("users.gender", "genders")
                .addSelect(['genders.pk', 'genders.name'])
                .leftJoinAndSelect("users.country", "countries")
                .leftJoinAndSelect("users.role", "roles")
                // .addSelect(['user_documents'])
                .leftJoinAndMapOne(
                    'users.user_document',
                    UserDocument,
                    'user_documents',
                    'users.pk=user_documents.user_pk and user_documents.type = \'profile_photo\''
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'documents',
                    'user_documents.document_pk=documents.pk',
                )

                .leftJoinAndMapOne(
                    'users.user_address',
                    UserAddress,
                    'user_addresses',
                    'users.pk=user_addresses.user_pk'
                )
                .leftJoinAndMapOne(
                    'user_addresses.province',
                    Province,
                    'provinces',
                    'user_addresses.province_code=provinces.province_code',
                )
                .leftJoinAndMapOne(
                    'user_addresses.city',
                    City,
                    'cities',
                    'user_addresses.city_code=cities.city_code',
                )
                .leftJoinAndMapOne(
                    'user_addresses.area',
                    Area,
                    'areas',
                    'user_addresses.area_pk=areas.pk',
                )
                // .andWhere(new Brackets(qb => {
                //     qb.where('users.first_name ILIKE :search', { search: `%${filters.search}%` })
                //         .orWhere('users.last_name ILIKE :search', { search: `%${filters.search}%` });
                // }))
                .andWhere(
                    filters.hasOwnProperty('keyword') && filters.keyword != '' ?
                        "(users.first_name ILIKE :keyword or users.last_name ILIKE :keyword or users.middle_name ILIKE :keyword)" :
                        '1=1', { keyword: `%${filters.keyword}%` }
                )
                .andWhere(
                    filters.hasOwnProperty('archived') && filters.archived != '' ?
                        "users.archived = :archived" :
                        '1=1', { archived: `${filters.archived}` }
                )
                .andWhere("role_pk != 1")
                .skip(filters.skip)
                .take(filters.take)
                .orderBy(orderByColumn, orderByDirection)
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

    async find(user: any) {
        return await getRepository(User)
            .createQueryBuilder('users')
            .select('users')
            .leftJoinAndSelect("users.account", "accounts")
            .leftJoinAndSelect("users.seller", "sellers")
            .addSelect(["accounts.pk", "accounts.username", "accounts.active", "accounts.verified"])
            .leftJoinAndMapOne(
                'users.user_document',
                UserDocument,
                'user_documents',
                'users.pk=user_documents.user_pk and user_documents.type = \'profile_photo\''
            )
            .leftJoinAndMapOne(
                'user_documents.document',
                Document,
                'documents',
                'user_documents.document_pk=documents.pk',
            )
            .where("accounts.pk = :pk", { pk: user.account.pk })
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
                // .skip(filters.skip)
                // .take(filters.take)
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
                // .skip(filters.skip)
                // .take(filters.take)
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
                .where("user_follow.created_by IN (:...pks)", { pks })
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
                .where("user_follow.user_pk IN (:...pks)", { pks })
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

    async followedByUser(createdBys: any, userPks: any) {
        try {
            return await getRepository(UserFollow)
                .createQueryBuilder('user_follow')
                .select('user_follow')
                .leftJoinAndSelect("user_follow.user", "users")
                .where("user_follow.created_by in (:...createdBys)", { createdBys })
                .andWhere("user_follow.user_pk in (:...userPks)", { userPks })
                .getMany()
                ;

        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async getUserRatings(pks: any, filters: any) {
        try {
            // console.log(pks);
            return await getRepository(UserRating)
                .createQueryBuilder('user_ratings')
                .select('user_ratings')
                .addSelect(['users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])
                .leftJoinAndSelect("user_ratings.createdBy", "users")
                .leftJoinAndSelect("users.user_document", "user_documents")
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )
                .where("user_ratings.user_pk IN (:...pk)", { pk: pks })
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

    async getUserTotalRatings(pks: any) {
        try {
            return await getRepository(UserRating)
                .createQueryBuilder('user_ratings')
                .select('user_pk')
                .addSelect('sum(rating) as total')
                .addSelect('count(pk) as count')
                .where("user_ratings.user_pk IN (:...pk)", { pk: pks })
                .groupBy('user_pk')
                .getRawAndEntities()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    // async followings(params: any) {
    //     try {
    //         return await getRepository(UserFollow)
    //             .createQueryBuilder('user_follow')
    //             .select('user_follow')
    //             .leftJoinAndSelect("user_follow.user", "users")
    //             .where("user_follow.created_by = :pk", { pk: params.pk })
    //             .getManyAndCount()
    //             ;

    //     } catch (error) {
    //         console.log(error);
    //         // SAVE ERROR
    //         return {
    //             status: false
    //         }
    //     }
    // }

    // async followers(params: any) {
    //     try {
    //         return await getRepository(UserFollow)
    //             .createQueryBuilder('user_follow')
    //             .select('user_follow')
    //             .leftJoinAndSelect("user_follow.createdBy", "users")
    //             .where("user_follow.user_pk = :pk", { pk: params.pk })
    //             .getManyAndCount()
    //             ;

    //     } catch (error) {
    //         console.log(error);
    //         // SAVE ERROR
    //         return {
    //             status: false
    //         }
    //     }
    // }

    async follow(user: any, data: any) {
        // console.log('follow', data, user);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const follow = new UserFollow();
                    follow.user_pk = data.user_pk;
                    follow.created_by = user.pk;
                    const newFollow = await EntityManager.save(follow);

                    const notification = new Notification();
                    notification.title = 'Follow';
                    notification.details = user.first_name + ' ' + user.last_name + ' followed you.';
                    notification.user_pk = data.user_pk;
                    notification.sender_pk = user.pk;
                    await EntityManager.save(notification);

                    // LOGS
                    const uuid = uuidv4();
                    const log = new Log();
                    log.model = 'users';
                    log.model_pk = newFollow.pk;
                    log.details = JSON.stringify({
                        user_pk: data.user_pk,
                        created_by: user.pk
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, pk: newFollow.pk };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }
    }

    async unfollow(user: any, data: any) {
        // console.log('unfollow', data, user);
        try {
            return await getConnection()
                .createQueryBuilder()
                .delete()
                .from(UserFollow)
                .where("user_pk = :user_pk", { user_pk: data.user_pk })
                .andWhere("created_by = :created_by", { created_by: user.pk })
                .execute();
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
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

    async update(data: any) {
        console.log('updating user', data);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const user = await EntityManager.findOne(User, data.pk);
                    user.first_name = data.first_name;
                    user.last_name = data.last_name;
                    user.gender_pk = data.gender;
                    user.birthdate = data.birthdate;
                    user.email_address = data.email_address;
                    user.mobile_number = data.mobile;
                    user.about = data.about;
                    user.archived = data.archived;
                    const updatedUser = await EntityManager.save(user);

                    const account = await EntityManager.findOne(Account, user.account_pk);
                    account.archived = data.archived;
                    await EntityManager.save(account);

                    await EntityManager.update(UserAddress, { user_pk: data.pk }, { province_code: data.province, city_code: data.city, area_pk: data.area, address: data.address_details });

                    if (data.display_photo) {
                        let displayPhoto = await EntityManager.findOne(UserDocument, { user_pk: data.pk, type: 'profile_photo' });
                        if (displayPhoto) {
                            await EntityManager.update(UserDocument, { pk: displayPhoto.pk }, { document_pk: data.display_photo });
                        }
                        else {
                            const document = new UserDocument();
                            document.user_pk = data.pk;
                            document.type = 'profile_photo';
                            document.document_pk = data.display_photo;
                            await EntityManager.save(document);
                        }
                    }

                    if (data.id_photo) {
                        let idPhoto = await EntityManager.findOne(UserDocument, { user_pk: data.pk, type: 'id_photo' });
                        if (idPhoto) {
                            await EntityManager.update(UserDocument, { pk: idPhoto.pk }, { document_pk: data.id_photo });
                        }
                        else {
                            const document = new UserDocument();
                            document.user_pk = data.pk;
                            document.type = 'id_photo';
                            document.document_pk = data.id_photo;
                            await EntityManager.save(document);
                        }
                    }

                    return { status: true, data: updatedUser };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }

    }

    async delete(data: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const user = await EntityManager.findOne(User, data.pk);
                    user.archived = true;
                    await EntityManager.save(user);

                    const account = await EntityManager.findOne(Account, data.account.pk);
                    account.archived = true;
                    const updatedAccount = await EntityManager.save(account);

                    // LOGS
                    const log = new Log();
                    log.model = 'users';
                    log.model_pk = user.pk;
                    log.details = JSON.stringify({
                        archived: true,
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: updatedAccount };
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
