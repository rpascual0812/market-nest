import { Body, Controller, Get, Post, Request, Response, UseGuards, HttpStatus, UseInterceptors, UploadedFile, ConsoleLogger } from '@nestjs/common';
import { SellerService } from './seller.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('sellers')
export class SellerController {
    constructor(private readonly sellerService: SellerService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Response() res: any, @Body() body: any, @Request() req) {
        const seller = await this.sellerService.create(body, req.user);
        if (seller) {
            return res.status(HttpStatus.OK).json({ status: 'success' });
        }
        return res.status(HttpStatus.FORBIDDEN).json({ status: 'failed' });
    }

    @Get()
    findAll() {
        return this.sellerService.findAll();
    }

}
