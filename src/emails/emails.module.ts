import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmailsService } from './emails.service';
import { EmailsController } from './emails.controller';
import { Email } from './entities/email.entity';
import { ValidationService } from 'src/validation/validation.service';
import { Validation } from 'src/validation/entities/validation.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Email, Validation]),
    ],
    providers: [EmailsService, ValidationService],
    controllers: [EmailsController],
    exports: [EmailsService]
})
export class EmailsModule { }
