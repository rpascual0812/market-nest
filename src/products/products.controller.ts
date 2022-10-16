import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() body: any, @Request() req: any, @Response() res: any) {
        const product = await this.productsService.create(body, req.user);
        return res.status(product.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(product);
    }

    @Get()
    async findAll(@Request() req: any) {
        const products = await this.productsService.findAll(req.user, req.query);
        if (products) {
            const pks = products[0].map(({ pk }) => pk);

            const documents = await this.productsService.getProductDocuments(pks, req.query);
            const ratings = await this.productsService.getProductRatings(pks, req.query);
            const totalRatings = await this.productsService.getProductTotalRatings(pks);

            products[0].forEach(product => {
                if (!product.hasOwnProperty('product_documents')) {
                    product['product_documents'] = [];
                }
                // Append product documents
                if (documents) {
                    documents[0].forEach(document => {
                        if (product.pk == document.product_pk) {
                            product['product_documents'].push(document);
                        }
                    });
                }

                if (!product.hasOwnProperty('product_ratings')) {
                    product['product_ratings'] = [];
                }
                // Append product ratings
                if (ratings) {
                    ratings[0].forEach(rating => {
                        if (product.pk == rating.product_pk) {
                            product['product_ratings'].push(rating);
                        }
                    });
                }

                if (!product.hasOwnProperty('product_rating_total')) {
                    product['product_rating_total'] = 0;
                }
                if (!product.hasOwnProperty('product_rating_count')) {
                    product['product_rating_count'] = 0;
                }
                // Append product rating total
                if (totalRatings['raw']) {
                    totalRatings['raw'].forEach(rating => {
                        if (product.pk == rating.product_pk) {
                            product['product_rating_count'] = rating.count;
                            product['product_rating_total'] = rating.total / rating.count;
                        }
                    });
                }
            });

            return {
                status: true,
                data: products[0],
                total: products[1]
            }
            // products[0].forEach(async (product, i) => {
            //     const documents = await this.productsService.getProductDocuments(product['pk'], req.query);
            //     products[0][i]['document'] = documents;
            //     newProducts.push(product);

            //     products['data'] = newProducts;
            //     return products;
            // });
        }
        else {
        }
        // console.log('products', newProducts);


        // throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Get('rating')
    async findOneRatingPerUser(@Request() req: any, @Response() res: any) {
        const data = await this.productsService.findOneRatingPerUser(req.query, req.user);
        if (data) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: data });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @UseGuards(JwtAuthGuard)
    @Post('rating')
    async createRating(@Body() body: any, @Request() req: any, @Response() res: any) {
        const data = await this.productsService.createRating(body, req.user);
        if (data) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: data });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
        // return res.status(product.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(product);
    }
}
