import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { SellerAddress } from './entities/seller-address.entity';
import { SellerDocument } from './entities/seller-document.entity';
import { Seller } from './entities/seller.entity';

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
                    address.province_pk = 3;
                    address.city_pk = 2;
                    address.area_pk = 1;
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
            // console.log('finally...');
        }


    }

    findAll() {
        return `This action returns all seller`;
    }
}
