import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Article]),
    ],
    controllers: [ArticlesController],
    providers: [ArticlesService]
})
export class ArticlesModule { }
