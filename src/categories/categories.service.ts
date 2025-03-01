import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import dataSource from 'db/data-source';

@Injectable()
export class CategoriesService {
    create(createCategoryDto: CreateCategoryDto) {
        return 'This action adds a new category';
    }

    async findAll(filters: any) {
        try {
            return await dataSource.getRepository(Category)
                .createQueryBuilder('categories')
                .where('categories.archived=false')
                .orderBy('name', 'ASC')
                .skip(filters.skip)
                .take(filters.take)
                .getManyAndCount()
                ;
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    findOne(id: number) {
        return `This action returns a #${id} category`;
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return `This action updates a #${id} category`;
    }

    remove(id: number) {
        return `This action removes a #${id} category`;
    }
}
