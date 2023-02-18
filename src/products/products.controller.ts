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

    @UseGuards(JwtAuthGuard)
    @Post('/update')
    async update(@Body() body: any, @Request() req: any, @Response() res: any) {
        const product = await this.productsService.update(body, req.user);
        return res.status(product.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(product);
    }

    @Get()
    async findAll(@Request() req: any) {
        let products;
        let initialProducts;
        if (req.query.orderBy == 'Best Seller') {
            initialProducts = await this.productsService.findBestSellers(req.query);
            const pks = initialProducts.map(product => product.products_pk);
            products = pks.length > 0 ? await this.productsService.findByPks(pks) : [];
        }
        else if (req.query.orderBy == 'Average Rating') {
            initialProducts = await this.productsService.findHighestRated(req.query);
            const pks = initialProducts.map(product => product.products_pk);
            products = pks.length > 0 ? await this.productsService.findByPks(pks) : [];
        }
        else {
            products = await this.productsService.findAll(req.query);
        }

        // console.log('products', products[0]);
        // console.log('length', products[0].length);
        if (products && products[1] > 0) {
            const pks = products[0].map(({ pk }) => pk);
            const user_pks = products[0].map(({ user_pk }) => user_pk);
            const seller_pks = products[0].map(({ user }) => user && user.seller ? user.seller.pk : null);

            const documents = await this.productsService.getProductDocuments(pks, req.query);
            // console.log('documents', documents);
            const userAddresses = await this.usersService.getUserAddresses(user_pks, req.query);

            const sellerAddresses = await this.usersService.getSellerAddresses(seller_pks, req.query);
            // console.log(seller_pks, sellerAddresses);
            // const addresses = await this.productsService.getSellerAddresses(seller_pks, req.query);
            const ratings = await this.productsService.getProductRatings(pks, req.query);
            const totalRatings = await this.productsService.getProductTotalRatings(pks);
            const userInterests = req.query.interest_user_pk ? await this.productsService.getProductInterest(pks, req.query.interest_user_pk) : [];

            products[0].forEach(product => {
                if (!product.hasOwnProperty('product_documents')) {
                    product['product_documents'] = [];
                }
                // Append product documents

                if (documents) {
                    documents[0].forEach(document => {
                        // console.log(product.pk, document.product_pk);
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
                if (sellerAddresses) {
                    sellerAddresses[0].forEach(address => {
                        if (product.seller_pk == address.seller_pk) {
                            product['seller_addresses'].push(address);
                        }
                    });
                }

                if (!product.hasOwnProperty('interested')) {
                    product['interested'] = [];
                }

                if (userInterests[0]) {
                    userInterests[0].forEach(interest => {
                        if (product.pk == interest.product_pk && req.query.interest_user_pk == interest.user_pk) {
                            product['interested'].push(interest);
                        }
                    });
                }
            });

            // if the category is is best seller or average rating
            // rearrange the array here
            let newProducts = [];
            if (initialProducts) {
                initialProducts.forEach((product, i) => {
                    products[0].forEach(newProduct => {
                        if (newProduct.pk == product.products_pk) {
                            newProducts[i] = newProduct;
                        }
                    })
                });
            }
            else {
                newProducts = products[0];
            }

            return {
                status: true,
                data: newProducts,
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
        // console.log('products', newProducts);


        // throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/seen')
    async findAllSeen(@Request() req: any, @Response() res: any) {
        const data = await this.productsService.findAllSeen(req.query, req.user);


        if (data[1] > 0) {
            const product_pks = data[0].map(({ product }) => product.pk);
            const documents = await this.productsService.getProductDocuments(product_pks, req.query);

            data[0].forEach(seen => {
                if (!seen['product'].hasOwnProperty('product_documents')) {
                    seen['product']['product_documents'] = [];
                }
                if (documents) {
                    documents[0].forEach(document => {
                        if (seen['product'].pk == document.product_pk) {
                            seen['product']['product_documents'].push(document);
                        }
                    });
                }
            });

            return res.status(HttpStatus.OK).json({
                status: true,
                data: data[0],
                total: data[1]
            });
        }
        else {
            return res.status(HttpStatus.NOT_FOUND).json({
                status: false,
                data: [],
                total: 0
            });
        }
    }

    @Get(':pk')
    async findOne(@Request() req: any, @Response() res: any) {
        const product = await this.productsService.findOne(req.params);
        if (product) {
            // console.log(product['pk'], product['user']['seller']['pk']);
            const documents = await this.productsService.getProductDocuments([product['pk']], req.query);
            const userAddresses = await this.usersService.getUserAddresses([product['user_pk']], req.query);
            const sellerAddresses = product['user'] && product['user']['seller'] ? await this.usersService.getSellerAddresses([product['user']['seller']['pk']], req.query) : [];
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

    // @UseGuards(JwtAuthGuard)
    @Delete(':pk')
    async delete(@Body() body: any, @Request() req: any, @Response() res: any) {
        const product = await this.productsService.delete(req.params.pk);
        return res.status(product.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(product);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':product_pk/seen')
    async productSeen(@Request() req: any, @Response() res: any) {
        const data = await this.productsService.seen(req.params, req.user);
        if (data) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: data });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    // @UseGuards(JwtAuthGuard)
    @Get(':product_pk/interested')
    async getInterested(@Request() req: any, @Response() res: any) {
        const filters = {
            product_pk: req.params.product_pk,
            skip: req.query.skip,
            take: req.query.take,
        };
        const data = await this.productsService.getInterested(filters);
        console.log(data);

        if (data) {
            return res.status(HttpStatus.OK).json({
                status: true,
                data: data[0],
                total: data[1]
            });
        }
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ status: 'failed' });
    }

    @UseGuards(JwtAuthGuard)
    @Post(':product_pk/interested')
    async setInterest(@Request() req: any, @Response() res: any) {
        const data = await this.productsService.setInterest(req.params, req.user);
        if (data) {
            return res.status(HttpStatus.OK).json({ status: 'success', data: data });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }
}
