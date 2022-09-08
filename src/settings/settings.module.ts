import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Setting]),
    ],
    controllers: [SettingsController],
    providers: [SettingsService]
})
export class SettingsModule { }
