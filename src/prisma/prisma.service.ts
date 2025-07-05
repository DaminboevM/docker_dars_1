import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    private logger = new Logger('database')

    async onModuleInit() {
        try {
            await this.$connect()
            this.logger.log('connect ')
        } catch (error) {
            this.logger.log(error.message)
            process.exit()
        }
    }


    async onModuleDestroy() {
        try {
            await this.$disconnect()
            this.logger.log('disconnect ')
        } catch (error) {
            this.logger.log(error.message)
            process.exit()
        }
    }


}