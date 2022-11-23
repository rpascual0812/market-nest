import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
        private readonly productsService: ProductsService,
        private readonly usersService: UsersService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() body: any, @Request() req: any, @Response() res: any) {
        const order = await this.ordersService.create(body, req.user);
        return res.status(order ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(order);
    }

    @UseGuards(JwtAuthGuard)
    @Post('update')
    async update(@Body() body: any, @Request() req: any, @Response() res: any) {
        const order = await this.ordersService.update(body, req.user);
        return res.status(order.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(order);
    }

    @UseGuards(JwtAuthGuard)
    @Get('cart')
    async cart(@Body() body: any, @Request() req: any,) {
        const data = await this.ordersService.findCartOrders(body, req.user);

        if (data[1] > 0) {
            const product_pks = data[0].map(({ product }) => product.pk);
            const user_pks = data[0].map(({ product }) => product.user_pk);
            const seller_pks = data[0].map(({ seller_pk }) => seller_pk);

            const documents = await this.productsService.getProductDocuments(product_pks, req.query);
            const userAddresses = await this.usersService.getUserAddresses(user_pks, req.query);
            const sellerAddresses = await this.usersService.getSellerAddresses(seller_pks, req.query);
            // console.log(documents);
            // console.log(userAddresses);
            // console.log(sellerAddresses);
            data[0].forEach(order => {
                if (!order['product'].hasOwnProperty('product_documents')) {
                    order['product']['product_documents'] = [];
                }
                // Append product documents
                if (documents) {
                    documents[0].forEach(document => {
                        if (order.product.pk == document.product_pk) {
                            order['product']['product_documents'].push(document);
                        }
                    });
                }

                if (!order['product'].hasOwnProperty('user_addresses')) {
                    order['product']['user_addresses'] = [];
                }
                // Append user addresses
                if (userAddresses[0]) {
                    userAddresses[0].forEach(address => {
                        if (order['product'].user_pk == address.user_pk) {
                            order['product']['user_addresses'].push(address);
                        }
                    });
                }

                if (!order['seller'].hasOwnProperty('seller_addresses')) {
                    order['seller']['seller_addresses'] = [];
                }
                // Append seller addresses
                if (sellerAddresses) {
                    sellerAddresses[0].forEach(address => {
                        if (order.seller_pk == address.seller_pk) {
                            order['seller']['seller_addresses'].push(address);
                        }
                    });
                }

            });

            return {
                status: true,
                data: data[0],
                total: data[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async fetchAll(@Body() body: any, @Param() param: any, @Request() req: any,) {
        const orders = await this.ordersService.findOrders(req.query, req.user);
        if (orders[1] > 0) {
            const product_pks = orders[0].map(({ product }) => product.pk);
            const user_pks = orders[0].map(({ user_pk }) => user_pk);
            const seller_pks = orders[0].map(({ seller_pk }) => seller_pk);

            const documents = await this.productsService.getProductDocuments(product_pks, req.query);
            const userAddresses = await this.usersService.getUserAddresses(user_pks, req.query);
            const sellerAddresses = await this.usersService.getSellerAddresses(seller_pks, req.query);
            // console.log(seller_pks, sellerAddresses);
            orders[0].forEach(order => {
                if (!order['product'].hasOwnProperty('product_documents')) {
                    order['product']['product_documents'] = [];
                }
                // Append product documents
                if (documents) {
                    documents[0].forEach(document => {
                        if (order.product.pk == document.product_pk) {
                            order['product']['product_documents'].push(document);
                        }
                    });
                }

                if (!order.hasOwnProperty('user_addresses')) {
                    order['user_addresses'] = [];
                }
                // console.log(user_pks, userAddresses);
                // Append user addresses
                if (userAddresses) {
                    userAddresses[0].forEach(address => {
                        if (order.user_pk == address.user_pk) {
                            order['user_addresses'].push(address);
                        }
                    });
                }

                if (!order.hasOwnProperty('seller_addresses')) {
                    order['seller_addresses'] = [];
                }
                // Append seller addresses
                if (sellerAddresses) {
                    sellerAddresses[0].forEach(address => {
                        if (order.seller_pk == address.seller_pk) {
                            order['seller_addresses'].push(address);
                        }
                    });
                }
            });

            return {
                status: true,
                data: orders[0],
                total: orders[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('sold')
    async sold(@Body() body: any, @Request() req: any,) {
        const orders = await this.ordersService.findSoldOrders(body, req.user);

        if (orders[1] > 0) {
            const product_pks = orders[0].map(({ product }) => product.pk);

            const documents = await this.productsService.getProductDocuments(product_pks, req.query);

            orders[0].forEach(order => {
                if (!order.hasOwnProperty('product_documents')) {
                    order['product_documents'] = [];
                }
                // Append product documents
                if (documents) {
                    documents[0].forEach(document => {
                        if (order.product.pk == document.product_pk) {
                            order['product_documents'].push(document);
                        }
                    });
                }
            });
            // console.log('orders', orders);
            return {
                status: true,
                data: orders[0],
                total: orders[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('bought')
    async bought(@Body() body: any, @Request() req: any,) {
        const orders = await this.ordersService.findBoughtOrders(body, req.user);

        if (orders[1] > 0) {
            const product_pks = orders[0].map(({ product }) => product.pk);
            const seller_pks = orders[0].map(({ user }) => user ? user.pk : null);

            const documents = await this.productsService.getProductDocuments(product_pks, req.query);
            const sellerAddresses = await this.usersService.getSellerAddresses(seller_pks, req.query);

            orders[0].forEach(order => {
                if (!order.hasOwnProperty('product_documents')) {
                    order['product_documents'] = [];
                }
                // Append product documents
                if (documents) {
                    documents[0].forEach(document => {
                        if (order.product.pk == document.product_pk) {
                            order['product_documents'].push(document);
                        }
                    });
                }

                if (!order.hasOwnProperty('seller_addresses')) {
                    order['seller_addresses'] = [];
                }
                // Append seller addresses
                if (sellerAddresses) {
                    sellerAddresses[0].forEach(address => {
                        if (order.seller_pk == address.seller_pk) {
                            order['seller_addresses'].push(address);
                        }
                    });
                }
            });

            return {
                status: true,
                data: orders[0],
                total: orders[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }
}
