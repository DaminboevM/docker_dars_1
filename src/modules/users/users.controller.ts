import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}


    @Post('create')
    async create (@Body() payload: CreateUserDto) {
        return this.userService.create(payload)
    }

    
    @Put('update')
    async update (@Body() payload: UpdateUserDto) {
        return this.userService.update(payload)
    }


    @Delete(':id')
    async delete (@Param('id') id: string) {
        return this.userService.delete(id)
    }
}
