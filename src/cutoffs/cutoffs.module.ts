import { Module } from '@nestjs/common';
import { CutoffsService } from './cutoffs.service';
import { CutoffsController } from './cutoffs.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cutoff } from './entities/cutoff.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Cutoff]),
    ],
    controllers: [CutoffsController],
    providers: [CutoffsService],
    exports: [CutoffsService]
})
export class CutoffsModule { }
