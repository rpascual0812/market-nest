import { Body, Controller, Get, Post, Request, Response, UseGuards, HttpStatus, UseInterceptors, UploadedFile, ConsoleLogger, Param } from '@nestjs/common';
import { SellerService } from './seller.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';

@Controller('sellers')
export class SellerController {
    constructor(
        private readonly sellerService: SellerService,
        private readonly productsService: ProductsService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Response() res: any, @Body() body: any, @Request() req) {
        const seller = await this.sellerService.create(body, req.user);
        if (seller) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: seller });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @Get()
    findAll() {
        return this.sellerService.findAll();
    }

    @Get(':pk/products')
    async sellerProducts(@Param('pk') pk: number, @Request() req: any) {
        console.log(req);
        const products = await this.productsService.findSellerProducts(req.query, { user_pk: pk });
        if (products[1] > 0) {
            return {
                status: true,
                data: products[0],
                total: products[1]
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
    // async sellerProducts(@Param('pk') pk: number, @Response() res: any, @Body() body: any, @Request() req: any) {
    //     const products = await this.productService.findSellerProducts({}, { user_pk: pk });
    //     console.log(products[0], products[1]);
    //     return {
    //         status: true,
    //         data: products[0],
    //         total: products[1]
    //     }
    // }

}
