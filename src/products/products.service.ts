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
import { Order } from 'src/orders/entities/order.entity';
import { Status } from 'src/statuses/entities/status.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        @InjectRepository(Product)
        private productDocumentRepository: Repository<ProductDocument>,
    ) { }

    @UsePipes(ValidationPipe)
    async create(form: any, user: any) {
        console.log('creating rpoduct', form);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const product = new Product();
                    product.user_pk = user.pk;
                    product.uuid = uuidv4();
                    product.type = form.type;
                    product.name = form.name;
                    product.date_available = form.date_available;
                    product.description = form.description;
                    product.quantity = form.quantity;
                    product.measurement_pk = form.measurement;
                    product.category_pk = 1;
                    product.price_from = form.price_from;
                    product.price_to = form.price_to;
                    product.country_pk = 173;  //form.country_pk;
                    const newProduct = await EntityManager.save(product);

                    let documents = form.documents != '' ? form.documents.split(',') : [];

                    //Documents
                    documents.forEach((pk, i) => {
                        const document = new ProductDocument();
                        document.type = 'slide';
                        document.product_pk = newProduct.pk;
                        document.document_pk = pk;
                        document.user_pk = user.pk;
                        document.default = i == 0 ? true : false;
                        EntityManager.save(document);
                    });

                    if (form.type == 'looking_for') {
                        const status = await Status.findOne({
                            where: {
                                name: 'Awaiting Confirmation'
                            }
                        });

                        const order = new Order();
                        order.uuid = uuidv4();
                        order.user_pk = user.pk;
                        order.product_pk = newProduct.pk;
                        order.quantity = form.quantity;
                        order.measurement_pk = form.measurement;
                        order.price = 0;
                        order.status_pk = status.pk;
                        order.seller_pk = user.pk;
                        EntityManager.save(order);
                    }

                    // LOGS
                    const log = new Log();
                    log.model = 'products';
                    log.model_pk = newProduct.pk;
                    log.details = JSON.stringify({
                        user_pk: user.pk,
                        uuid: uuidv4(),
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

                    return { status: true, data: newProduct };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    @UsePipes(ValidationPipe)
    async update(form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const product = await EntityManager.findOne(Product, form.pk);
                    product.name = form.name;
                    product.price_from = form.price;
                    product.quantity = form.stock;
                    product.date_available = form.date_available;
                    product.description = form.description;
                    product.measurement_pk = form.measurement;
                    product.category_pk = form.category;
                    const updatedProduct = await EntityManager.save(product);

                    // document
                    await getConnection()
                        .createQueryBuilder()
                        .delete()
                        .from(ProductDocument)
                        .where("product_pk = :product_pk", { product_pk: product.pk })
                        .execute();

                    let documents = form.documents != '' ? form.documents.split(',') : [];
                    documents.forEach((pk, i) => {
                        const document = new ProductDocument();
                        document.type = 'slide';
                        document.product_pk = product.pk;
                        document.document_pk = pk;
                        document.user_pk = product.user_pk;
                        document.default = i == 0 ? true : false;
                        EntityManager.save(document);
                    });

                    // LOGS
                    const log = new Log();
                    log.model = 'products';
                    log.model_pk = product.pk;
                    log.details = JSON.stringify({
                        name: form.name,
                        quantity: form.quantity,
                        measurement: form.measurement,
                        price: form.price_from,
                    });
                    log.user_pk = product.user_pk;
                    await EntityManager.save(log);

                    return { status: true, data: updatedProduct };
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
                .leftJoinAndSelect("users.account", "accounts")
                .addSelect(['accounts.pk'])

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
        // console.log(data, filters);
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
                case 'Sort by Name':
                    orderByColumn = 'products.name';
                    orderByDirection = 'ASC';
                    break;
                case 'Sort by Date':
                    orderByColumn = 'products.date_created';
                    orderByDirection = 'ASC';
                    break;
                case 'Sort by Category':
                    orderByColumn = 'products.category_pk';
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
            // console.log('find all products', filters);
            return await getRepository(Product)
                .createQueryBuilder('products')
                .where('products.archived=false')
                .andWhere(filters.hasOwnProperty('user_pk') ? "products.user_pk = :user_pk" : '1=1', { user_pk: filters.user_pk })
                .andWhere(filters.hasOwnProperty('year') ? "date_part('year', products.date_available) = :year" : '1=1', { year: filters.year })
                .andWhere(filters.hasOwnProperty('months') ? "TRIM(TO_CHAR(products.date_available, 'Month')) in (:...months)" : '1=1', { months: monthsArr })
                .andWhere(filters.hasOwnProperty('createdBy') ? "products.user_pk = :createdBy" : '1=1', { createdBy: filters.createdBy })
                .andWhere(filters.hasOwnProperty('type') ? "products.type IN (:...type)" : '1=1', { type })
                .andWhere(filters.hasOwnProperty('categoryFilter') && filters.categoryFilter != '0' ? "products.category_pk = :category_pk" : '1=1', { category_pk: filters.categoryFilter })

                // additional where for search
                // All
                .andWhere(
                    filters.hasOwnProperty('filter') && filters.filter == 'All' &&
                        filters.hasOwnProperty('keyword') ?
                        "products.name ILIKE :keyword" :
                        '1=1', { keyword: `%${filters.keyword}%` }
                )
                // Products
                .andWhere(
                    filters.hasOwnProperty('filter') && filters.filter == 'Products' &&
                        filters.hasOwnProperty('keyword') ?
                        "products.name ILIKE :keyword" :
                        '1=1', { keyword: `%${filters.keyword}%` }
                )
                // Producer


                .leftJoinAndSelect("products.user", "users")
                .select('products')
                .addSelect(['users.pk, users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

                .leftJoinAndSelect("users.seller", "sellers")
                .addSelect(['users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

                .leftJoinAndSelect("users.account", "accounts")
                .addSelect(['accounts.pk'])

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

    async delete(pk: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    EntityManager.update(Product, { pk }, { archived: true });
                    return { status: true, data: { pk } };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }
}
