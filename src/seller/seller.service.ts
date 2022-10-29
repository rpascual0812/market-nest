import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Seller } from './entities/seller.entity';

@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller)
        private SellerRepository: Repository<Seller>,
    ) { }

    create(data, user) {
        console.log(data);
        const obj: any = {
            uuid: uuidv4(),
            user_pk: user.pk,
            mobile_number: user.mobile_number,
        }

        const seller = this.SellerRepository.create(obj);
        return this.SellerRepository.save(seller);
    }

    findAll() {
        return `This action returns all seller`;
    }
}
