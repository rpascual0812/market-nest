import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) { }

    @Post()
    create(@Body() createAccountDto: CreateAccountDto) {
        return this.accountsService.create(createAccountDto);
    }

    @Get()
    findAll() {
        return this.accountsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':pk')
    findOne(@Param('pk') pk: number) {
        return this.accountsService.findOne(pk);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
        return this.accountsService.update(+id, updateAccountDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.accountsService.remove(+id);
    }
}
