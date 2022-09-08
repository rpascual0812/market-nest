import { Module } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { ValidationController } from './validation.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Validation } from './entities/validation.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Validation]),
    ],
    controllers: [ValidationController],
    providers: [ValidationService],
    exports: [ValidationService]
})
export class ValidationModule { }
