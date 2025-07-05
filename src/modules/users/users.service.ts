import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto/dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async create(payload: CreateUserDto) {
        if (! await this.prisma.user.findFirst({where: {email: payload.email}})) {
            throw new ConflictException('email alredy  exists !')
        }

        this.prisma.user.create({data: payload})
        return {message: 'user succsessfull created !'}
    }


    async update (payload: UpdateUserDto) {
        if(! await this.prisma.user.findFirst({where: {id: payload.id}}) || (payload.email && !await this.prisma.user.findFirst({where: {email: payload.email}})) ) {
            throw new BadRequestException()
        }

        await this.prisma.user.update({where: {id: payload.id}, data: payload})
        return {message: 'user succesfull updated !'}
    }


    async delete (id: string) {
        if(! await this.prisma.user.findFirst({where: {id}})) {
            throw new NotFoundException('user not found !')
        }

        await this.prisma.user.delete({where: {id}})
        return {message: 'user succesfull deletedd !'}
    }
}
