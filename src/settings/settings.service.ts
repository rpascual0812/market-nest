import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { Setting } from './entities/setting.entity';

@Injectable()
export class SettingsService {
    constructor(
        @InjectRepository(Setting)
        private settingRepository: Repository<Setting>,
    ) { }

    create(setting: any, user: any) {
        console.log(setting, user);

        const obj: any = {
            user_pk: user.pk,
            company_pk: user.company_pk,
            settings: JSON.stringify({
                value: setting.value
            }),
            group: setting.group,
            name: setting.name
        }

        const newSetting = this.settingRepository.create(obj);
        return this.settingRepository.save(newSetting);
    }

    findAll() {
        return `This action returns all settings`;
    }

    findOne(id: number) {
        return `This action returns a #${id} setting`;
    }

    update(id: number, updateSettingDto: UpdateSettingDto) {
        return `This action updates a #${id} setting`;
    }

    remove(id: number) {
        return `This action removes a #${id} setting`;
    }
}
