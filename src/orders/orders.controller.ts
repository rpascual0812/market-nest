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
        const product = await this.ordersService.create(body, req.user);
        return res.status(product.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(product);
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
            console.log('orders', orders);
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
            const seller_pks = orders[0].map(({ seller }) => seller ? seller.seller.pk : null);

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
                        if (order.seller.seller.pk == address.seller_pk) {
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

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.ordersService.update(+id, updateOrderDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordersService.remove(+id);
    }
}
