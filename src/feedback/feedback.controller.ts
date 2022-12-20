import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FeedbackService } from './feedback.service';

@Controller('feedbacks')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Request() req: any, @Body() body: any) {
        return this.feedbackService.findAll(req.query);
    }

}
