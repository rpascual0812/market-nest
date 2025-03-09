import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FeedbackService } from './feedback.service';
import { generatePath } from 'src/utilities/generate-s3-path.utils';

@Controller('feedbacks')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Request() req: any, @Body() body: any) {
        return this.feedbackService.save(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Request() req: any, @Body() body: any) {
        const feedbacks: any = await this.feedbackService.findAll(req.query);
        console.log(feedbacks);
        feedbacks.data.forEach(feedback => {
            generatePath(feedback.user.user_document.document['path'], (path: string) => {
                feedback.user.user_document.document['path'] = path;
            });
        });
        return feedbacks;
    }

}
