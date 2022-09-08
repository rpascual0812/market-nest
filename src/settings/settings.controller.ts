import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, HttpStatus, NotFoundException } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() setting: any, @Request() req: any, @Response() res: any) {
        console.log(setting, req.user);
        const newSetting = await this.settingsService.create(setting, req.user);
        return true;
        // return res.status(newSetting.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(newTicket);
    }

    @Get()
    findAll() {
        return this.settingsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.settingsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSettingDto: UpdateSettingDto) {
        return this.settingsService.update(+id, updateSettingDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.settingsService.remove(+id);
    }
}
