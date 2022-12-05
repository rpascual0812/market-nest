import { Body, Controller, Get, Post, Request, Response, UseGuards, HttpStatus, UseInterceptors, UploadedFile, ConsoleLogger, Param, InternalServerErrorException } from '@nestjs/common';
import { SellerService } from './seller.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { UsersService } from 'src/users/users.service';

@Controller('sellers')
export class SellerController {
    constructor(
        private readonly sellerService: SellerService,
        private readonly productsService: ProductsService,
        private readonly usersService: UsersService,
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
        // console.log(req.params);
        const products = await this.productsService.findAll({}, { user_pk: pk, type: req.query.type });
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
    @Get(':pk')
    async findOne(@Param('pk') pk: number, @Request() req: any) {
        const account = await this.sellerService.findOne(pk);
        const userAddresses = await this.usersService.getUserAddresses([account['user']['pk']], req.query);
        const sellerAddresses = account && account['user']['seller'] ? await this.usersService.getSellerAddresses([account['user']['seller']['pk']], req.query) : [];
        const userFollowing = await this.usersService.getUserFollowing([account['user']['pk']], req.query);
        const userFollower = await this.usersService.getUserFollower([account['user']['pk']], req.query);

        const pagination = {
            skip: 0,
            take: 10
        };
        const ratings = await this.usersService.getUserRatings([account['user']['pk']], pagination);
        const totalRatings = await this.usersService.getUserTotalRatings([account['user']['pk']]);
        // console.log(ratings, totalRatings);
        // console.log(userAddresses);

        account['user']['user_addresses'] = [];
        // Append user addresses
        if (userAddresses) {
            userAddresses[0].forEach(address => {
                if (account['user']['pk'] == address.user_pk) {
                    account['user']['user_addresses'].push(address);
                }
            });
        }

        account['user']['seller_addresses'] = [];
        if (sellerAddresses[0]) {
            sellerAddresses[0].forEach(address => {
                if (account['user']['seller']['pk'] == address.seller_pk) {
                    account['user']['seller_addresses'].push(address);
                }
            });
        }

        account['user']['following_count'] = userFollowing ? userFollowing[1] : 0;
        account['user']['following'] = [];
        if (userFollowing) {
            userFollowing[0].forEach(following => {
                if (account['user']['pk'] == following.created_by) {
                    account['user']['following'].push(following);
                }
            });
        }

        account['user']['follower_count'] = userFollower ? userFollower[1] : 0;
        account['user']['follower'] = [];
        if (userFollower) {
            userFollower[0].forEach(follower => {
                if (account['user']['pk'] == follower.user_pk) {
                    account['user']['follower'].push(follower);
                }
            });
        }

        if (!account.hasOwnProperty('user_ratings')) {
            account['user']['user_ratings'] = [];
        }
        // Append user ratings
        if (ratings) {
            ratings[0].forEach(rating => {
                if (account.user.pk == rating.user_pk) {
                    account['user']['user_ratings'].push(rating);
                }
            });
        }

        if (!account.hasOwnProperty('user_rating_total')) {
            account['user']['user_rating_total'] = 0;
        }
        if (!account.hasOwnProperty('user_rating_count')) {
            account['user']['user_rating_count'] = 0;
        }
        // Append user rating total
        if (totalRatings['raw']) {
            totalRatings['raw'].forEach(rating => {
                if (account.user.pk == rating.user_pk) {
                    account['user']['user_rating_count'] = rating.count;
                    account['user']['user_rating_total'] = rating.total / rating.count;
                }
            });
        }

        // console.log(account['user']);
        if (account) {
            return account;
        }

        throw new InternalServerErrorException();
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
