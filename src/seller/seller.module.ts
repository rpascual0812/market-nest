import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Seller]),
    ],
    controllers: [SellerController],
    providers: [SellerService]
})
export class SellerModule { }
