import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, UseGuards, HttpStatus, NotFoundException } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() ticket: any, @Request() req: any, @Response() res: any) {
        const newTicket = await this.ticketsService.create(ticket, req.user);
        return res.status(newTicket.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(newTicket);
    }

    @UseGuards(JwtAuthGuard)
    @Post('message')
    async createMessage(@Body() body: any, @Request() req: any, @Response() res: any) {
        const newConversation = await this.ticketsService.createMessage(body, req.user);
        return res.status(newConversation ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json(newConversation);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Body() body: any, @Request() req: any) {
        let filter = {
            account: req.user,
            pagination: req.query
        }
        return await this.ticketsService.findAll(filter);
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.ticketsService.findOne(+id);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    //     return this.ticketsService.update(+id, updateTicketDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.ticketsService.remove(+id);
    // }

    // CONVERSATIONS
    @UseGuards(JwtAuthGuard)
    @Get('messages')
    async messages(@Body() body: any, @Request() req: any) {
        const ticket = await this.ticketsService.findOne(req.query.uuid);
        if (ticket) {
            let filter = {
                account: req.user,
                ticket_pk: ticket.pk,
                pagination: req.query.pagination
            }

            return await this.ticketsService.findMessages(filter);
        }
        else {
            throw new NotFoundException();
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('resolve')
    async resolve(@Body() body: any, @Request() req: any, @Response() res: any) {
        const result = await this.ticketsService.update(body.pk, req.user, body);
        return res.status(result.status ? HttpStatus.OK : HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: result.status
        });
    }

    // @UseGuards(JwtAuthGuard)
    // @Post('message')
    // async saveMessage(@Body() body: any, @Request() req: any) {
    //     console.log(body);
    //     return await this.ticketsService.createMessage(body, req.user);
    // }
}
