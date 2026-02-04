import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { generatePath } from 'src/utilities/generate-s3-path.utils';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Request() req: any) {
        let notications = this.notificationsService.findAll(req.user)['data'];

        notications.forEach(notification => {
            generatePath(notification.user.article_document.document['path'], (path: string) => {
                notification.user.article_document.document['path'] = path;
            });
        });

        return notications;
    }

}
