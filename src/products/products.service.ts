import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository, getConnection, Collection, Brackets } from 'typeorm';
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
import { ProductSeen } from './entities/product-seen.entity';

import { DateTime } from "luxon";
import { Account } from 'src/accounts/entities/account.entity';
import { ProductInterested } from './entities/product-interested.entity';

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
        // console.log('creating rpoduct', form);
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
                    product.category_pk = form.category;
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
                                name: form.status
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
                        order.seller_pk = null;
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
            await queryRunner.release();
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
            await queryRunner.release();
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

    async findAll(filters: any) {
        // console.log(1, filters);
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
                    orderByColumn = 'categories.name';
                    orderByDirection = 'ASC';
                    break;
                default:
                    orderByColumn = 'products.date_created';
                    orderByDirection = 'DESC';
            }
        }
        else {
            orderByColumn = 'products.date_created';
            orderByDirection = 'DESC';
        }

        try {
            let months = filters.hasOwnProperty('months') ? JSON.parse(filters.months) : [];
            const monthsArr = months.map((month) => month.name);

            let user_pk = null;
            if (filters.hasOwnProperty('user_pk')) {
                user_pk = filters.user_pk
            }
            else if (filters.hasOwnProperty('account_pk')) {
                const user = await User.findOne({
                    account_pk: filters.account_pk
                });
                user_pk = user.pk;
            }

            let types = [];
            let isFutureCrop = false;
            if (filters.hasOwnProperty('type') && filters.type) {
                types = filters.type.split(',');
                types.forEach((type, i) => {
                    if (type == 'future_crop') {
                        isFutureCrop = true;
                        types[i] = 'product';
                    }
                });
            }

            // console.log('types', types, isFutureCrop);
            return await getRepository(Product)
                .createQueryBuilder('products')
                .where('products.archived=false')
                .andWhere(user_pk != null ? "products.user_pk = :user_pk" : '1=1', { user_pk: user_pk })
                .andWhere(filters.hasOwnProperty('type') ? "products.type IN (:...type)" : '1=1', { type: types })
                .andWhere(filters.hasOwnProperty('year') ? "date_part('year', products.date_available) = :year" : '1=1', { year: filters.year })
                .andWhere(filters.hasOwnProperty('months') ? "TRIM(TO_CHAR(products.date_available, 'Month')) in (:...months)" : '1=1', { months: monthsArr })
                .andWhere(filters.hasOwnProperty('createdBy') ? "products.user_pk = :createdBy" : '1=1', { createdBy: filters.createdBy })
                .andWhere(filters.hasOwnProperty('categoryFilter') && filters.categoryFilter != '0' ? "products.category_pk = :category_pk" : '1=1', { category_pk: filters.categoryFilter })
                .andWhere(isFutureCrop ? "products.date_available > :date" : '1=1', { date: new Date() })
                .andWhere(!isFutureCrop ? "products.date_available <= :date" : '1=1', { date: new Date() })

                .andWhere(filters.hasOwnProperty('filter') && filters.filter == 'Location' ? new Brackets(qb => {
                    qb.where("seller_addresses.address ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("provinces.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("cities.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("areas.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                }) : '1=1')

                // additional where for search
                // All
                .andWhere(filters.hasOwnProperty('filter') && filters.filter == 'All' ? new Brackets(qb => {
                    qb.where("products.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.first_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("users.last_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("seller_addresses.address ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("provinces.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("cities.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                        .orWhere("areas.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                }) : '1=1')
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
                .leftJoinAndSelect("products.category", "categories")

                // user addresses
                // .leftJoinAndMapMany(
                //     'users.user_address',
                //     UserAddress,
                //     'user_addresses',
                //     'users.pk=user_addresses.user_pk'
                // )
                // .leftJoinAndSelect("user_addresses.province", "provinces")
                // .leftJoinAndSelect("user_addresses.city", "cities")
                // .leftJoinAndSelect("user_addresses.area", "areas")

                // user addresses
                .leftJoinAndMapMany(
                    'sellers.seller_address',
                    SellerAddress,
                    'seller_addresses',
                    'sellers.pk=seller_addresses.seller_pk'
                )
                .leftJoinAndSelect("seller_addresses.province", "provinces")
                .leftJoinAndSelect("seller_addresses.city", "cities")
                .leftJoinAndSelect("seller_addresses.area", "areas")

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

    async getProductInterest(pks: any, user_pk: any) {
        try {
            return await getRepository(ProductInterested)
                .createQueryBuilder('product_interested')
                .where("product_interested.product_pk IN (:...pk)", { pk: pks })
                .andWhere("product_interested.user_pk IN (:...user_pk)", { user_pk: [user_pk] })
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
            await queryRunner.release();
        }
    }

    @UsePipes(ValidationPipe)
    async seen(form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const existing = await EntityManager.findOne(ProductSeen, { 'user_pk': user.pk, 'product_pk': form.product_pk });

                    let productSeen = {};
                    if (!existing) {
                        const seen = new ProductSeen();
                        seen.user_pk = user.pk;
                        seen.product_pk = form.product_pk;
                        productSeen = await EntityManager.save(seen);
                    }
                    else {
                        EntityManager.update(ProductSeen, { pk: existing.pk }, { date_created: DateTime.now() });
                        productSeen = await EntityManager.findOne(ProductSeen, { 'pk': existing.pk });
                    }

                    return { status: true, data: productSeen };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }
    }

    async findAllSeen(filters: any, user: any) {
        try {
            return await getRepository(ProductSeen)
                .createQueryBuilder('product_seen')
                .andWhere("product_seen.user_pk = :user_pk", { user_pk: user.pk })
                .select('product_seen')
                .leftJoinAndSelect("product_seen.product", "products")
                .leftJoinAndSelect("products.country", "countries")
                .leftJoinAndSelect("products.measurement", "measurements")
                .leftJoinAndSelect("products.category", "categories")

                .leftJoinAndSelect("product_seen.user", "users")
                .leftJoinAndSelect("users.user_document", "user_documents")
                .leftJoinAndMapOne(
                    'user_documents.document',
                    Document,
                    'user_doc',
                    'user_documents.document_pk=user_doc.pk',
                )
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

    async getInterested(filters: any) {
        return await getRepository(ProductInterested)
            .createQueryBuilder('product_interested')
            .andWhere("product_interested.product_pk = :product_pk", { product_pk: filters.product_pk })
            .select('product_interested')
            .leftJoinAndSelect("product_interested.product", "products")
            .leftJoinAndSelect("product_interested.user", "users")
            .leftJoinAndSelect("users.user_document", "user_documents")
            .leftJoinAndMapOne(
                'user_documents.document',
                Document,
                'user_doc',
                'user_documents.document_pk=user_doc.pk',
            )
            .skip(filters.skip)
            .take(filters.take)
            .getManyAndCount()
            ;
    }

    async setInterest(filters: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {

                    let interest = await EntityManager.findOne(ProductInterested, { 'user_pk': user.pk, 'product_pk': filters.product_pk });

                    if (interest) {
                        await getConnection()
                            .createQueryBuilder()
                            .delete()
                            .from(ProductInterested)
                            .where("user_pk = :user_pk", { user_pk: user.pk })
                            .where("product_pk = :product_pk", { product_pk: filters.product_pk })
                            .execute();

                        interest = null;
                    }
                    else {
                        const product = new ProductInterested();
                        product.user_pk = user.pk;
                        product.product_pk = filters.product_pk;
                        interest = await EntityManager.save(product);

                        // LOGS
                        const log = new Log();
                        log.model = 'products';
                        log.model_pk = interest.pk;
                        log.details = JSON.stringify({
                            user_pk: user.pk,
                            uuid: filters.product_pk,
                            status: 'deleted',
                            date_created: DateTime.now
                        });
                        log.user_pk = user.pk;
                        await EntityManager.save(log);
                    }

                    return { status: true, data: interest };
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
