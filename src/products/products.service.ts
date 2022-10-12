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

    async findAll(data: any, filters: any) {
        console.log('filters', filters);
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
            const products = await getRepository(Product)
                .createQueryBuilder('products')
                .leftJoinAndSelect("products.user", "users")
                .select('products')
                .addSelect(['users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

                .leftJoinAndSelect("products.measurement", "measurements")
                .leftJoinAndSelect("products.country", "countries")
                .leftJoinAndSelect("products.category", "product_categories")

                // user documents
                .leftJoinAndMapOne(
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

                // product documents
                .leftJoinAndMapMany(
                    'products.product_document',
                    ProductDocument,
                    'product_documents',
                    'products.pk=product_documents.product_pk'
                )
                .leftJoinAndMapOne(
                    'product_documents.document',
                    Document,
                    'product_doc',
                    'product_documents.document_pk=product_doc.pk',
                )

                // product ratings
                .leftJoinAndMapMany(
                    'products.product_rating',
                    ProductRating,
                    'product_ratings',
                    'products.pk=product_ratings.product_pk'
                )
                .orderBy(orderByColumn, orderByDirection)
                // .addOrderBy('products.date_created', 'DESC')
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;

            products[0].forEach((product) => {
                let total = 0,
                    ratings = 0;

                product.product_rating.forEach((rating) => {
                    total++;
                    ratings += parseFloat(rating.rating.toString());
                });

                let rating = ratings / total;
                product['total_rating'] = rating ? parseFloat(rating.toString()).toFixed(2) : '0.00';

                product['rating_count'] = product.product_rating.length;
            });

            return {
                status: true,
                data: products[0],
                total: products[1]
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
