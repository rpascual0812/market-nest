import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, HttpStatus, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService,
        private readonly usersService: UsersService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() body: any, @Request() req: any, @Response() res: any) {
        const product = await this.productsService.create(body, req.user);
        return res.status(product.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(product);
    }

    @Get()
    async findAll(@Request() req: any) {
        const products = await this.productsService.findAll(req.user, req.query);
        if (products[1] > 0) {
            const pks = products[0].map(({ pk }) => pk);
            const user_pks = products[0].map(({ user_pk }) => user_pk);
            const seller_pks = products[0].map(({ product }) => product && product.user ? product.user.seller.pk : null);

            const documents = await this.productsService.getProductDocuments(pks, req.query);
            const userAddresses = await this.usersService.getUserAddresses(user_pks, req.query);

            const sellerAddresses = await this.usersService.getSellerAddresses(seller_pks, req.query);
            // const addresses = await this.productsService.getSellerAddresses(seller_pks, req.query);
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

                if (!product.hasOwnProperty('user_addresses')) {
                    product['user_addresses'] = [];
                }
                // Append user addresses
                if (userAddresses[0]) {
                    userAddresses[0].forEach(address => {
                        if (product.user_pk == address.user_pk) {
                            product['user_addresses'].push(address);
                        }
                    });
                }

                if (!product.hasOwnProperty('seller_addresses')) {
                    product['seller_addresses'] = [];
                }
                // Append seller addresses
                if (userAddresses) {
                    userAddresses[0].forEach(address => {
                        if (product.seller_pk == address.seller_pk) {
                            product['seller_addresses'].push(address);
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
            return {
                status: false,
                data: [],
                total: 0
            }
        }
        // console.log('products', newProducts);


        // throw new InternalServerErrorException();
    }

    @Get(':pk')
    async findOne(@Request() req: any, @Response() res: any) {
        const product = await this.productsService.findOne(req.params);
        if (product) {
            // console.log(product['pk'], product['user']['seller']['pk']);
            const documents = await this.productsService.getProductDocuments([product['pk']], req.query);
            const userAddresses = await this.usersService.getUserAddresses([product['user_pk']], req.query);
            const sellerAddresses = product['user'] ? await this.usersService.getSellerAddresses([product['user']['seller']['pk']], req.query) : [];
            const ratings = await this.productsService.getProductRatings([product['pk']], req.query);
            const totalRatings = await this.productsService.getProductTotalRatings([product['pk']]);

            product['product_documents'] = [];
            // Append product documents
            if (documents) {
                documents[0].forEach(document => {
                    if (product['pk'] == document.product_pk) {
                        product['product_documents'].push(document);
                    }
                });
            }

            product['product_ratings'] = [];
            // Append product ratings
            if (ratings) {
                ratings[0].forEach(rating => {
                    if (product['pk'] == rating.product_pk) {
                        product['product_ratings'].push(rating);
                    }
                });
            }

            product['product_rating_total'] = 0;
            product['product_rating_count'] = 0;
            // Append product rating total
            if (totalRatings['raw']) {
                totalRatings['raw'].forEach(rating => {
                    if (product['pk'] == rating.product_pk) {
                        product['product_rating_count'] = rating.count;
                        product['product_rating_total'] = rating.total / rating.count;
                    }
                });
            }

            product['user_addresses'] = [];
            // Append user addresses
            if (userAddresses) {
                userAddresses[0].forEach(address => {
                    if (product['user_pk'] == address.user_pk) {
                        product['user_addresses'].push(address);
                    }
                });
            }

            product['seller_addresses'] = [];
            // Append user addresses
            if (sellerAddresses[0]) {
                sellerAddresses[0].forEach(address => {
                    if (product['user']['seller']['pk'] == address.seller_pk) {
                        product['seller_addresses'].push(address);
                    }
                });
            }

            return res.status(HttpStatus.OK).json({ status: 'success', data: product });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @UseGuards(JwtAuthGuard)
    @Get(':product_pk/rating')
    async findOneRatingPerUser(@Request() req: any, @Response() res: any) {
        const data = await this.productsService.findOneRatingPerUser(req.params, req.user);
        if (data) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: data });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @UseGuards(JwtAuthGuard)
    @Post('ratings')
    async createRating(@Body() body: any, @Request() req: any, @Response() res: any) {
        const data = await this.productsService.createRating(body, req.user);
        if (data) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: data });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
        // return res.status(product.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(product);
    }
}
