import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { DateTime } from "luxon";

import { EmailsService } from '../../emails/emails.service';

@Injectable()
export class CronEmailService {
    pagination = {
        skip: 0,
        take: 10
    }

    constructor(
        private readonly emailsService: EmailsService
    ) { }

    @Cron('*/15 * * * * *')
    runEvery15Seconds() {
        console.log(DateTime.now().toFormat('y-LL-dd HH:mm:ss') + ' - Running Email Sender Service');
        this.emailsService.findAll(this.pagination).then((emails: any) => {
            emails.forEach(email => {
                this.sendEmail(email);
            });
        }).catch((err: any) => {
            // save something on the error logs
            console.log(err);
        });
    }

    sendEmail(email: any) {
        switch (process.env.PROVIDER) {
            case 'mailjet':
                this.mailjet(email);
                break;

            default:
                this.mailjet(email);
                break;
        }
    }

    mailjet(email: any) {
        const mailjet = require('node-mailjet')
            .connect(process.env.API_KEY, process.env.SECRET_KEY)
        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request(this.buildEmail(email));

        console.log('Sending email to: ' + email.to + ' - ' + email.subject);

        request
            .then((result) => {
                this.emailsService.update(email.pk, { sent: 'true' }).then((data: any) => {
                    // console.log('updated... ', data);
                }).catch((err: any) => {
                    // save something on the error logs
                    console.log(err);
                });
            })
            .catch((err) => {
                // save something on the error logs
                console.log(err.statusCode)
            });
    }

    buildEmail(email) {
        return {
            "Messages": [
                {
                    "From": {
                        "Email": email.from,
                        "Name": email.from_name
                    },
                    "To": [
                        {
                            "Email": email.to,
                            "Name": email.to_name
                        }
                    ],
                    "Subject": email.subject,
                    // "TextPart": "My first Mailjet email",
                    "HTMLPart": email.body,
                    "CustomID": email.uuid
                }
            ]
        };
    }
}
