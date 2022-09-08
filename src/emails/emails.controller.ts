import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Response, HttpStatus } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { ValidationService } from 'src/validation/validation.service';

const axios = require('axios');

@Controller('emails')
export class EmailsController {
    success: any = ['DELIVERABLE'];

    constructor(
        private readonly emailsService: EmailsService,
        private readonly validationService: ValidationService
    ) { }

    @Post()
    create(@Body() createEmailDto: CreateEmailDto) {
        // return this.emailsService.create(createEmailDto);
        return this.emailsService.create();
    }

    @Get()
    findAll(@Request() req: any) {
        return this.emailsService.findAll(req.query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.emailsService.findOne(+id);
    }

    @Patch(':pk')
    update(@Param('pk') pk: number, @Body() email: any) {
        return this.emailsService.update(+pk, email);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.emailsService.remove(+id);
    }

    /**
     * Email Validation
     * validations table
     * @returns 
     */

    @Post('check')
    async checkEmail(@Body() data: any, @Response() res: any) {
        // check if the email address has already been checked before
        let mustValidate: boolean = true;
        const email = await this.validationService.findOne(data.email);
        // console.log(email, this.success.includes(email.status));
        if (email) {
            mustValidate = false;
        }

        if (!mustValidate) {
            return res.status(HttpStatus.OK).json({ email: email.value, status: this.success.includes(email.status) ? true : false });
        }
        else {
            axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.EMAIL_CHECK_API_KEY}&email=${data.email}`)
                .then(response => {
                    // save result to db first
                    this.validationService.create({ type: 'email', value: data.email, status: response.data.deliverability });

                    return res.status(HttpStatus.OK).json({
                        email: data.email,
                        status: this.success.includes(response.data.deliverability) ? true : false
                    });

                    /*
                    {
                    email: 'asdfasasasdf@gmail.com',
                    autocorrect: '',
                    deliverability: 'DELIVERABLE', // UNDELIVERABLE
                    quality_score: '0.70',
                    is_valid_format: { value: true, text: 'TRUE' },
                    is_free_email: { value: true, text: 'TRUE' },
                    is_disposable_email: { value: false, text: 'FALSE' },
                    is_role_email: { value: false, text: 'FALSE' },
                    is_catchall_email: { value: false, text: 'FALSE' },
                    is_mx_found: { value: true, text: 'TRUE' },
                    is_smtp_valid: { value: true, text: 'TRUE' }
                    }
                    */
                })
                .catch(error => {
                    console.log(error);
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
                });
        }
    }
}
