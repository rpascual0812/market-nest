import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { ProductsController } from 'src/products/products.controller';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/entities/user.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { Account } from 'src/accounts/entities/account.entity';
import { AccountsController } from 'src/accounts/accounts.controller';
import { AccountsService } from 'src/accounts/accounts.service';
import { UserDocument } from 'src/users/entities/user-document.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Order, Product, User, Account, UserDocument]),
    ],
    controllers: [OrdersController, ProductsController, UsersController, AccountsController],
    providers: [OrdersService, ProductsService, UsersService, AccountsService]
})
export class OrdersModule { }
