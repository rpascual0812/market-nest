import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
    constructor(private readonly reportService: ReportService) { }

    @UseGuards(JwtAuthGuard)
    @Get('orders')
    async findOrders(@Body() body: any, @Param() param: any, @Request() req: any,) {
        const orders = await this.reportService.findOrders(req.query, req.user);
        if (orders[1] > 0) {
            return {
                status: true,
                data: orders[0],
                total: orders[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('total_orders')
    async totalOrders(@Body() body: any, @Param() param: any, @Request() req: any,) {
        const orders = await this.reportService.totalOrders();
        if (orders[1] > 0) {
            return {
                status: true,
                data: orders[0],
                total: orders[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('closed_orders')
    async closedOrders(@Body() body: any, @Param() param: any, @Request() req: any,) {
        const orders = await this.reportService.closedOrders();
        if (orders[1] > 0) {
            return {
                status: true,
                data: orders[0],
                total: orders[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get('cancelled_orders')
    async cancelledOrders(@Body() body: any, @Param() param: any, @Request() req: any,) {
        const orders = await this.reportService.cancelledOrders();
        if (orders[1] > 0) {
            return {
                status: true,
                data: orders[0],
                total: orders[1]
            }
        }
        else {
            return {
                status: false,
                data: [],
                total: 0
            }
        }
    }

}
