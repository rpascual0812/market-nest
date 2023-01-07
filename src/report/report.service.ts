import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { getConnection, getRepository, Repository } from 'typeorm';
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
            .andWhere(
                filters.hasOwnProperty('keyword') ?
                    "products.name ILIKE :keyword" :
                    '1=1', { keyword: `%${filters.keyword}%` }
            )
            .skip(filters.skip)
            .take(filters.take)
            .orderBy('orders.pk', 'DESC')
            .getManyAndCount()
            ;
    }

    async totalOrders() {
        return await getRepository(Order)
            .createQueryBuilder('orders')
            .select('orders')
            .where('orders.archived=false')
            .getManyAndCount()
            ;
    }

    async closedOrders() {
        return await getRepository(Order)
            .createQueryBuilder('orders')
            .select('orders')
            .where('orders.archived=false')
            .andWhere('orders.status_pk=9')
            .getManyAndCount()
            ;
    }

    async cancelledOrders() {
        return await getRepository(Order)
            .createQueryBuilder('orders')
            .select('orders')
            .where('orders.archived=false')
            .andWhere('orders.status_pk=3')
            .getManyAndCount()
            ;
    }

}
