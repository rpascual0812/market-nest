import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { DateTime } from "luxon";

@Injectable()
export class CheckService {
    @Cron('* * * * * *')
    runEvery10Seconds() {
        // console.log('Cron is Running: ' + DateTime.now().toFormat('y-LL-dd HH:mm:ss'));
    }
}
