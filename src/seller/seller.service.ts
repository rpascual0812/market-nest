import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/accounts/entities/account.entity';
import { Log } from 'src/logs/entities/log.entity';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { SellerAddress } from './entities/seller-address.entity';
import { SellerDocument } from './entities/seller-document.entity';
import { Seller } from './entities/seller.entity';
import { Document } from 'src/documents/entities/document.entity';

@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller)
        private SellerRepository: Repository<Seller>,
    ) { }

    async create(data, user) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        let documents = data.documents != '' ? data.documents.split(',') : [];
        let photos = data.photos ? data.photos.split(',') : [];

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const uuid = uuidv4();
                    const seller = new Seller();
                    seller.uuid = uuid;
                    seller.user_pk = user.pk;
                    seller.mobile_number = user.mobile_number;
                    const newSeller = await EntityManager.save(seller);

                    //Address
                    const address = new SellerAddress();
                    address.type = 'home';
                    address.default = true;
                    address.province_code = data.province;
                    address.city_code = data.city;
                    address.area_pk = data.area;
                    address.address = data.address;
                    address.seller_pk = newSeller.pk;
                    EntityManager.save(address);

                    //Documents
                    documents.forEach(pk => {
                        const document = new SellerDocument();
                        document.type = 'document';
                        document.seller_pk = newSeller.pk;
                        document.document_pk = pk;
                        EntityManager.save(document);
                    });

                    //Photos
                    photos.forEach(pk => {
                        const document = new SellerDocument();
                        document.type = 'profile_photo';
                        document.seller_pk = newSeller.pk;
                        document.document_pk = pk;
                        EntityManager.save(document);
                    });

                    // LOGS
                    const log = new Log();
                    log.model = 'sellers';
                    log.model_pk = newSeller.pk;
                    log.details = JSON.stringify({
                        user_pk: user.pk,
                        uuid: uuid,
                        type: 'seller register',
                        mobile_number: user.mobile_number,
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return newSeller;
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }


    }

    findAll(filters: any) {
        return getRepository(Account)
            .createQueryBuilder('accounts')
            .leftJoinAndSelect("accounts.user", "users")
            .leftJoinAndSelect("users.seller", "sellers")
            .leftJoinAndSelect("users.gender", "genders")
            // // user documents
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

            // // seller documents
            .leftJoinAndMapMany(
                'sellers.seller_document',
                SellerDocument,
                'seller_documents',
                'sellers.pk=seller_documents.seller_pk'
            )
            .leftJoinAndMapOne(
                'seller_documents.document',
                Document,
                'doc',
                'seller_documents.document_pk=doc.pk',
            )
            .where('users.archived=false')
            .andWhere('users.is_seller=true')
            .andWhere('sellers.archived=false')
            .andWhere(
                filters.hasOwnProperty('keyword') ?
                    "(users.first_name ILIKE :keyword or users.last_name ILIKE :keyword)" :
                    '1=1', { keyword: `%${filters.keyword}%` }
            )
            .skip(filters.skip)
            .take(filters.take)
            .getManyAndCount()
            ;
    }

    findOne(pk: number) {
        // return this.accountRepository.findOne({ where: { pk } });
        return getRepository(Account)
            .createQueryBuilder('accounts')
            .select(['accounts.username', 'accounts.verified'])
            .leftJoinAndSelect("accounts.user", "users")
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

            // seller documents
            .leftJoinAndMapMany(
                'sellers.seller_document',
                SellerDocument,
                'seller_documents',
                'sellers.pk=seller_documents.seller_pk'
            )
            .leftJoinAndMapOne(
                'seller_documents.document',
                Document,
                'doc',
                'seller_documents.document_pk=doc.pk',
            )
            .where("accounts.pk = :pk", { pk })
            .getOne()
            ;
    }

    // async findOne(filters: any) {
    //     try {
    //         return await getRepository(Seller)
    //             .createQueryBuilder('sellers')
    //             .select('sellers')
    //             .where('sellers.archived = false')
    //             .andWhere(filters.hasOwnProperty('user_pk') ? "sellers.user_pk = :user_pk" : '1=1', { user_pk: filters.user_pk })
    //             .getOneOrFail()
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
