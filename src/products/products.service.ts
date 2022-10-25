import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository, getConnection, Collection } from 'typeorm';
import { Product } from './entities/product.entity';
import { Log } from 'src/logs/entities/log.entity';

import { v4 as uuidv4 } from 'uuid';
import { ProductDocument } from './entities/product-document.entity';
import { Document } from 'src/documents/entities/document.entity';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { UserAddress } from 'src/users/entities/user-address.entity';
import { User } from 'src/users/entities/user.entity';
import { ProductRating } from './entities/product-ratings.entity';
import { SellerAddress } from 'src/seller/entities/seller-address.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) { }

    @UsePipes(ValidationPipe)
    async create(form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const uuid = uuidv4();
                    const product = new Product();
                    product.user_pk = user.pk;
                    product.uuid = uuid;
                    product.type = form.type;
                    product.name = form.name;
                    product.quantity = form.quantity;
                    product.measurement_pk = form.measurement;
                    product.price_from = form.price_from;
                    product.price_to = form.price_to;
                    product.country_pk = 173;  //form.country_pk;
                    const newProduct = await EntityManager.save(product);

                    // LOGS
                    const log = new Log();
                    log.model = 'products';
                    log.model_pk = newProduct.pk;
                    log.details = JSON.stringify({
                        user_pk: user.pk,
                        uuid: uuid,
                        type: form.type,
                        name: form.name,
                        quantity: form.quantity,
                        measurement: form.measurement,
                        price_from: form.price_from,
                        price_to: form.price_to,
                        currency: form.currency,
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, uuid: uuid };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    async findOne(data: any) {
        try {
            return await getRepository(Product)
                .createQueryBuilder('products')
                .select('products')
                .leftJoinAndSelect("products.user", "users")
                .leftJoinAndSelect("users.seller", "sellers")
                .addSelect(['users.pk, users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

                .leftJoinAndSelect("products.measurement", "measurements")
                .leftJoinAndSelect("products.country", "countries")
                .leftJoinAndSelect("products.category", "product_categories")

                // user documents
                .leftJoinAndMapMany(
                    'products.user_document',
                    UserDocument,
                    'user_documents',
                    'products.user_pk=user_documents.user_pk'
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )
                .where('products.pk = :pk', { pk: data.pk })
                .getOneOrFail()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async findAll(data: any, filters: any) {
        /*
        'Best Seller',
            'Newest',
            'Highest Price',
            'Lowest Price',
            'Average Rating',
            'Vegetables',
            'Fruits',
            'Seeds',
            'Herbs',
            */


        let orderByColumn,
            orderByDirection;
        if (filters.hasOwnProperty('orderBy')) {
            switch (filters.orderBy) {
                case 'Best Seller':
                    orderByColumn = 'products.price_from';
                    orderByDirection = 'DESC';
                    break;
                case 'Newest':
                    orderByColumn = 'products.date_created';
                    orderByDirection = 'DESC';
                    break;
                case 'Highest Price':
                    orderByColumn = 'products.price_from';
                    orderByDirection = 'DESC';
                    break;
                case 'Lowest Price':
                    orderByColumn = 'products.price_from';
                    orderByDirection = 'ASC';
                    break;
                case 'Lowest Price':
                    orderByColumn = 'products.price_from';
                    orderByDirection = 'ASC';
                    break;
                default:
                    orderByColumn = 'products.date_created';
                    orderByDirection = 'DESC';
            }
        }

        try {
            let months = filters.hasOwnProperty('months') ? JSON.parse(filters.months) : [];
            const monthsArr = months.map((month) => month.name);

            let type = [];
            if (filters.hasOwnProperty('type') && filters.type) {
                type = filters.type.split(',');
            }

            return await getRepository(Product)
                .createQueryBuilder('products')
                .where('products.archived=false')
                .andWhere(filters.hasOwnProperty('year') ? "date_part('year', products.date_created) = :year" : '1=1', { year: filters.year })
                .andWhere(filters.hasOwnProperty('months') ? "TO_CHAR(products.date_created, 'Month') in (:...months)" : '1=1', { months: monthsArr })
                .andWhere(filters.hasOwnProperty('createdBy') ? "products.user_pk = :createdBy" : '1=1', { createdBy: filters.createdBy })
                .andWhere(filters.hasOwnProperty('type') ? "products.type IN (:...type)" : '1=1', { type })
                .leftJoinAndSelect("products.user", "users")
                .select('products')
                .addSelect(['users.pk, users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

                .leftJoinAndSelect("users.seller", "sellers")
                .addSelect(['users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

                .leftJoinAndSelect("products.measurement", "measurements")
                .leftJoinAndSelect("products.country", "countries")
                .leftJoinAndSelect("products.category", "product_categories")

                // user documents
                .leftJoinAndMapMany(
                    'products.user_document',
                    UserDocument,
                    'user_documents',
                    'products.user_pk=user_documents.user_pk'
                )
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )

                .orderBy(orderByColumn, orderByDirection)
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

    async getProductDocuments(pks: any, filters: any) {
        try {
            return await getRepository(ProductDocument)
                .createQueryBuilder('product_documents')
                .select('product_documents')
                .leftJoinAndMapOne(
                    'product_documents.document',
                    Document,
                    'product_doc',
                    'product_documents.document_pk=product_doc.pk',
                )
                // .where("product_documents.product_pk = :pk", { pk })
                .where("product_documents.product_pk IN (:...pk)", { pk: pks })
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

    async getProductRatings(pks: any, filters: any) {
        try {
            return await getRepository(ProductRating)
                .createQueryBuilder('product_ratings')
                .select('product_ratings')
                .addSelect(['users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])
                .leftJoinAndSelect("product_ratings.user", "users")
                .leftJoinAndSelect("users.user_document", "user_documents")
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )
                .where("product_ratings.product_pk IN (:...pk)", { pk: pks })
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

    async getProductTotalRatings(pks: any) {
        try {
            return await getRepository(ProductRating)
                .createQueryBuilder('product_ratings')
                .select('product_pk')
                .addSelect('sum(rating) as total')
                .addSelect('count(pk) as count')
                .where("product_ratings.product_pk IN (:...pk)", { pk: pks })
                .groupBy('product_pk')
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

    async findOneRatingPerUser(data: any, filters: any) {
        try {
            return await ProductRating.findOne({
                user_pk: parseInt(filters.pk),
                product_pk: parseInt(data.product_pk)
            });
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    async createRating(body: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();
        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const existing = await EntityManager.findOne(ProductRating, { 'user_pk': user.pk, 'product_pk': body.product_pk });
                    // await EntityManager.remove(existing);
                    if (existing) {
                        const fields = { 'rating': body.rating, 'message': body.message, anonymous: body.anonymous == 'true' ? true : false };
                        const filters = { 'user_pk': user.pk, 'product_pk': body.product_pk };
                        const res = await EntityManager.update(ProductRating, filters, fields);
                        if (res.affected > 0) {
                            return await EntityManager.findOne(ProductRating, { 'user_pk': user.pk, 'product_pk': body.product_pk });
                        }
                        return null;
                    }
                    else {
                        const data = new ProductRating();
                        data.user_pk = user.pk;
                        data.product_pk = body.product_pk;
                        data.rating = parseFloat(body.rating);
                        data.message = body.message;
                        data.anonymous = body.anonymous;
                        return await EntityManager.save(data);
                    }
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
            // console.log('finally...');
        }
    }
}
