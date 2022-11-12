import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { getConnection, getRepository, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { v4 as uuidv4 } from 'uuid';
import { Order } from './entities/order.entity';
import { Log } from 'src/logs/entities/log.entity';
import { Status } from 'src/statuses/entities/status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDocument } from 'src/users/entities/user-document.entity';
import { Document } from 'src/documents/entities/document.entity';
import { Product } from 'src/products/entities/product.entity';
import { Seller } from 'src/seller/entities/seller.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) { }

    @UsePipes(ValidationPipe)
    async create(form: any, user: any) {
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            const status = await Status.findOne({
                name: form.status
            });
            const product = await Product.findOne({
                pk: form.product_pk
            });
            const seller = await Seller.findOne({
                user_pk: product.user_pk
            });
            console.log(seller);
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    const existing = await getRepository(Order)
                        .createQueryBuilder('orders')
                        .where("orders.user_pk = :user_pk", { user_pk: user.pk })
                        .andWhere("orders.product_pk = :product_pk", { product_pk: form.product_pk })
                        .andWhere("orders.status_pk = :status_pk", { status_pk: status.pk })
                        .orderBy('pk')
                        .limit(1)
                        .getOne()
                        ;

                    if (existing) {
                        const fields = {
                            'quantity': parseFloat(existing.quantity.toString()) + parseFloat(form.quantity),
                            'price': parseFloat(existing.price.toString()) + parseFloat(form.price),
                        };
                        const filters = {
                            'user_pk': parseInt(user.pk),
                            'product_pk': parseInt(form.product_pk),
                            'status_pk': status.pk
                        };
                        const res = await EntityManager.update(Order, filters, fields);
                        console.log(res);
                        if (res.affected > 0) {
                            return await EntityManager.findOne(Order, { 'user_pk': user.pk, 'product_pk': form.product_pk });
                        }
                        return null;
                    }
                    else {
                        const uuid = uuidv4();
                        const order = new Order();
                        order.uuid = uuid;
                        order.user_pk = user.pk;
                        order.seller_pk = seller.user_pk;
                        order.product_pk = form.product_pk;
                        order.quantity = form.quantity;
                        order.measurement_pk = form.measurement_pk;
                        order.price = form.price;
                        order.status_pk = status.pk;  //form.country_pk;
                        const newOrder = await EntityManager.save(order);

                        // LOGS
                        const log = new Log();
                        log.model = 'orders';
                        log.model_pk = newOrder.pk;
                        log.details = JSON.stringify({
                            uuid: uuid,
                            user_pk: user.pk,
                            product_pk: form.product_pk,
                            quantity: form.quantity,
                            measurement_pk: form.measurement_pk,
                            price: form.price,
                            status: status.name,
                        });
                        log.user_pk = user.pk;
                        await EntityManager.save(log);

                        return { status: true, uuid: uuid };
                    }

                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    async update(body: any, user: any) {
        console.log('update', body);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            const status = await Status.findOne({
                name: body.status
            });
            let pks = body.order_pks.split(',');
            let orderPks = [];
            pks.forEach(pk => {
                orderPks.push({ pk });
            });

            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    EntityManager.update(Order, orderPks, { status_pk: status.pk });
                    return { status: true, data: { status: true } };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }

    async findCartOrders(filters: any, user: any) {
        return await getRepository(Order)
            .createQueryBuilder('orders')
            .select('orders')
            .leftJoinAndSelect("orders.user", "users")
            .leftJoinAndSelect("orders.status", "statuses")
            .leftJoinAndSelect("orders.product", "products")
            .addSelect(['users.pk, users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

            .leftJoinAndSelect("products.measurement", "measurements")
            .leftJoinAndSelect("products.country", "countries")
            .leftJoinAndSelect("products.category", "product_categories")

            .where('orders.archived=false')
            .andWhere('orders.status_pk = :pk', { pk: '1' })

            .skip(filters.skip)
            .take(filters.take)
            .getManyAndCount()
            ;
    }

    async findOrders(filters: any, user: any) {
        // console.log(filters);
        let type = [];
        if (filters.hasOwnProperty('type') && filters.type) {
            type = filters.type.split(',');
        }

        let status_pk = null;
        let status = await Status.findOne({
            name: filters.status
        });
        if (status) {
            status_pk = status.pk;
        }

        return await getRepository(Order)
            .createQueryBuilder('orders')
            .select('orders')
            .leftJoinAndSelect("orders.seller", "users")
            .leftJoinAndSelect("users.seller", "sellers")
            .leftJoinAndSelect("orders.status", "statuses")
            .leftJoinAndSelect("orders.product", "products")
            .addSelect(['users.pk, users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

            .leftJoinAndSelect("products.measurement", "measurements")
            .leftJoinAndSelect("products.country", "countries")
            .leftJoinAndSelect("products.category", "product_categories")

            .where('orders.archived=false')
            // .andWhere('orders.seller_pk = :pk', { pk: user.pk })
            .andWhere(filters.hasOwnProperty('type') ? "products.type IN (:...type)" : '1=1', { type })
            .andWhere(filters.hasOwnProperty('status') && status ? "orders.status_pk = :status_pk" : '1=1', { status_pk: status_pk })
            .andWhere(filters.hasOwnProperty('user_pk') && !filters.hasOwnProperty('seller') ? "orders.user_pk = :user_pk" : '1=1', { user_pk: user.pk })
            .andWhere(filters.hasOwnProperty('seller') ? "products.user_pk = :user_pk" : '1=1', { user_pk: user.pk })

            .skip(filters.skip)
            .take(filters.take)
            .getManyAndCount()
            ;
    }

    async findSoldOrders(filters: any, user: any) {
        return await getRepository(Order)
            .createQueryBuilder('orders')
            // .andWhere(filters.hasOwnProperty('year') ? "date_part('year', orders.date_created) = :year" : '1=1', { year: filters.year })
            .select('orders')
            .leftJoinAndSelect("orders.user", "users")
            .leftJoinAndSelect("orders.status", "statuses")
            .leftJoinAndSelect("orders.product", "products")
            .addSelect(['users.pk, users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

            .leftJoinAndSelect("products.measurement", "measurements")
            .leftJoinAndSelect("products.country", "countries")
            .leftJoinAndSelect("products.category", "product_categories")

            .where('orders.archived=false')
            .andWhere('orders.seller_pk = :pk', { pk: user.pk })

            .skip(filters.skip)
            .take(filters.take)
            .getManyAndCount()
            ;
    }

    async findBoughtOrders(filters: any, user: any) {
        console.log(filters, user);
        return await getRepository(Order)
            .createQueryBuilder('orders')
            // .andWhere(filters.hasOwnProperty('year') ? "date_part('year', orders.date_created) = :year" : '1=1', { year: filters.year })
            .select('orders')
            .leftJoinAndSelect("orders.seller", "users")
            .leftJoinAndSelect("users.seller", "sellers")
            .leftJoinAndSelect("orders.status", "statuses")
            .leftJoinAndSelect("orders.product", "products")
            .addSelect(['users.pk, users.uuid', 'users.last_name', 'users.first_name', 'users.middle_name', 'users.email_address'])

            .leftJoinAndSelect("products.measurement", "measurements")
            .leftJoinAndSelect("products.country", "countries")
            .leftJoinAndSelect("products.category", "product_categories")

            .where('orders.archived=false')
            .andWhere('orders.seller_pk = :pk', { pk: user.pk })

            .skip(filters.skip)
            .take(filters.take)
            .getManyAndCount()
            ;
    }
}
