import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class GarbageCollectorService {
    @Cron(CronExpression.EVERY_MINUTE)
    runEveryMinute() {
        console.log('Garbage Collecting every minute');
    }
}
