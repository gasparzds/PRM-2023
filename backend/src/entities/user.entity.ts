import {Entity, PrimaryGeneratedColumn, Column,CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({nullable: false, length:50})
    fullname: string;
    
    @Column({nullable: false, length:20})
    username: string;

    @Column({length:250})
    description: string;

    @Column({nullable: false, length:20})
    password: string;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updatedAt'})
    updatedAt: Date;
}