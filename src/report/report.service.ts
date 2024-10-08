import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Brackets, getConnection, getManager, getRepository, Repository } from 'typeorm';
import { Order } from 'src/orders/entities/order.entity';
import { Status } from 'src/statuses/entities/status.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) { }

    async findOrders(filters: any, user: any) {
        // console.log(filters, user);
        let type = [];
        let hasFutureCrops = false;
        if (filters.hasOwnProperty('type') && filters.type) {
            type = filters.type.split(',');
            hasFutureCrops = type.includes("future_crops") ? true : false;
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
            .leftJoinAndSelect("orders.user", "users")
            .leftJoinAndSelect("orders.seller", "sellers")
            .leftJoinAndSelect("sellers.user", "users as seller_user")
            // .leftJoinAndSelect("users.seller", "sellers")
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
            // .andWhere(
            //     filters.hasOwnProperty('keyword') ?
            //         "products.name ILIKE :keyword" :
            //         '1=1', { keyword: `%${filters.keyword}%` }
            // )
            .andWhere(filters.hasOwnProperty('keyword') ? new Brackets(qb => {
                qb.where("products.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                    .orWhere("users.first_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                    .orWhere("users.last_name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
                    .orWhere('"users as seller_user"."first_name" ILIKE :keyword', { keyword: `%${filters.keyword}%` })
                    .orWhere('"users as seller_user"."last_name" ILIKE :keyword', { keyword: `%${filters.keyword}%` })
                    .orWhere("statuses.name ILIKE :keyword", { keyword: `%${filters.keyword}%` })
            }) : '1=1')
            .skip(filters.skip)
            .take(filters.take)
            .orderBy('orders.pk', 'DESC')
            .getManyAndCount()
            ;
    }

    async countOrders(filters: any, user: any) {
        return await getRepository(Order)
            .createQueryBuilder('orders')
            .select('orders')
            .where('orders.archived=false')
            .andWhere(filters.hasOwnProperty('type') && filters.type == 'closed' ? "orders.status_pk=9" : '1=1')
            .andWhere(filters.hasOwnProperty('type') && filters.type == 'cancelled' ? "orders.status_pk=3" : '1=1')
            .getManyAndCount()
            ;
    }

    async countOrdersByCategories(filters: any, user: any) {
        try {
            const entityManager = getManager();
            return await entityManager.query(`
            select
                products.category_pk, categories.name
            from orders
            left join products on (orders.product_pk = products.pk)
            left join categories on (products.category_pk = categories.pk)
            where orders.archived = false
            group by products.category_pk, categories.name
            `);
        } catch (error) {
            return {
                status: false
            }
        }
        // return await getRepository(Order)
        //     .createQueryBuilder('orders')
        //     .select('products.category_pk')
        //     .leftJoin("orders.product", "products")
        //     .where('orders.archived=false')
        //     .groupBy('products.category_pk')
        //     .getManyAndCount()
        //     ;
    }
}
