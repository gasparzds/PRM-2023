import { Topic } from "src/entities/topic.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ApplicationException } from "src/exceptions";

@Injectable()
export class TopicService {

    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>
    ) { }

    findAll(): Promise<Topic[]> {
        return this.repository.find();
    }

    findById(id: number): Promise<Topic> {
        return this.repository.findOneBy({ id: id })

    }

    create(topic: Topic): Promise<Topic> {
        return this.repository.save(topic);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
    async update(id: number, topic: Topic): Promise<Topic> {

        const found = await this.repository.findOneBy({ id: id })
        if (!found) {
            throw new ApplicationException('Topic not found', 404)
        }
        // Garante que o objeto substituído terá o mesmo ID da requisição
        topic.id = id;

        return this.repository.save(topic);
    }
}