import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FaqService } from './faq.service';

@Controller('faq')
export class FaqController {
    constructor(private readonly faqService: FaqService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() req: any, @Body() body: any) {
        const data = await this.faqService.save(body, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @Get()
    findAll(@Request() req: any, @Body() body: any) {
        return this.faqService.findAll(req.query);
    }
}
