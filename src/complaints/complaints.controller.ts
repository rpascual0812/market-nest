import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, InternalServerErrorException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ComplaintsService } from './complaints.service';
import { generatePath } from '../utilities/generate-s3-path.utils';

@Controller('complaints')
export class ComplaintsController {
    constructor(private readonly complaintsService: ComplaintsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async save(@Request() req: any, @Body() body: any) {
        const data = await this.complaintsService.save(body, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Request() req: any, @Body() body: any) {
        let complaints = await this.complaintsService.findAll(req.query, req.user);
        if (complaints.total > 0) {
            complaints.data.forEach(complaint => {
                complaint['complaint_document'].forEach(document => {
                    generatePath(document['document']['path'], (path: string) => {
                        document['document']['path'] = path;
                    });
                })
            });
        }

        return complaints;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':pk/messages')
    async findMessages(@Param('pk') pk: any, @Body() body: any, @Request() req: any) {
        let messages = await this.complaintsService.findMessages(pk);

        messages[0].forEach((message) => {
            generatePath(message.user['user_document']['document']['path'], (path: string) => {
                message.user['user_document']['document']['path'] = path;
            });

            message.self = false;
            if (message.user.pk == req.user.pk) {
                message.self = true;
            }
        });

        if (messages[1] > 0) {
            return {
                status: true,
                // data: messages[0].reverse(),
                data: messages[0],
                total: messages[1]
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
    @Get(':complaint_pk/messages/:pk')
    async findMessage(@Param('complaint_pk') complaint_pk: any, @Param('pk') pk: any, @Body() body: any, @Request() req: any) {
        return await this.complaintsService.findMessage(pk);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':pk/messages')
    async sendMessage(@Param('pk') pk: any, @Body() body: any, @Request() req: any) {
        // console.log(pk, body, req.user);
        const data = await this.complaintsService.sendMessage(pk, body, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }

    @UseGuards(JwtAuthGuard)
    @Post(':pk/update')
    async update(@Param('pk') pk: any, @Body() body: any, @Request() req: any) {
        console.log(pk, req.user);
        const data = await this.complaintsService.update(pk, body, req.user);

        if (data) {
            return data;
        }

        throw new InternalServerErrorException();
    }
}
