import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 250 })
    content: string;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_id' })
    owner: User;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;


    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt: Date;

}