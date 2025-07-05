import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string
}


export class UpdateUserDto {

    @IsUUID()
    @IsNotEmpty()
    id: string


    @IsString()
    @IsOptional()
    name?: string

    @IsEmail()
    @IsOptional()
    email?: string
}