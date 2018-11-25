import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
} from "typeorm";

@Entity()
export class Planet {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: null
    })
    name: string;

    @Column({
        default: null
    })
    price: number;

    @Column({
        default: null
    })
    category: string;

    @Column({
        default: null
    })
    subcategory: string;

    @Column({
        default: null
    })
    description: string;

    @Column({
        default: null
    })
    src: string;

    @Column({
        default: null
    })
    brand: string;

    @Column({
        default: null
    })
    color: string;
}