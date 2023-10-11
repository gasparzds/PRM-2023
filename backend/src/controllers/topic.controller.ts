import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards} from "@nestjs/common";
import { TopicService } from "src/services/topic.service";
import { get } from "http";
import { Topic } from "src/entities/topic.entity";
import { PrimaryGeneratedColumn } from 'typeorm';
import { AuthGuard } from "src/guards/auth.guards";


@Controller('topics')
export class TopicController {
    constructor(private readonly service: TopicService) { }
        
    @UseGuards(AuthGuard)
    @Get()
    findAll(): Promise<Topic[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        return this.service.findById(id);
    }

    @Post()
    create(@Body() topic: Topic): Promise<Topic> {
        return this.service.create(topic)
    }


    @Delete(':id')
    @HttpCode(204)
   async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const found = await this.service.findById(id);
        if (!found) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return this.service.delete(found.id);

    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() topic: Topic): Promise<Topic> {
         const found = await this.service.findById(id);
         if (!found) {
         throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
         }
         return found;
     }



}