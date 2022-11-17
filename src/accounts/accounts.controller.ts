import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService, private readonly usersService: UsersService) { }

    @Post()
    create(@Body() createAccountDto: CreateAccountDto) {
        return this.accountsService.create(createAccountDto);
    }

    @Get()
    findAll() {
        return this.accountsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':pk')
    async findOne(@Param('pk') pk: number, @Request() req: any) {
        const account = await this.accountsService.findOne(pk);
        const userAddresses = await this.usersService.getUserAddresses([account['user']['pk']], req.query);
        const sellerAddresses = account && account['user']['seller'] ? await this.usersService.getSellerAddresses([account['user']['seller']['pk']], req.query) : [];
        const userFollowing = await this.usersService.getUserFollowing([account['user']['pk']], req.query);
        const userFollower = await this.usersService.getUserFollower([account['user']['pk']], req.query);

        const ratings = await this.usersService.getUserRatings([account['user']['pk']], req.query);
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

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
        return this.accountsService.update(+id, updateAccountDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.accountsService.remove(+id);
    }
}
