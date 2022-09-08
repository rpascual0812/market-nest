import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { DatabaseModule } from 'src/database.module';
import { Department } from './entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Department]),
    ],
    controllers: [DepartmentsController],
    providers: [DepartmentsService],
    exports: [DepartmentsService]
})
export class DepartmentsModule { }
