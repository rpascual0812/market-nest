import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, ManyToOne, OneToOne, BaseEntity, AfterLoad, OneToMany } from 'typeorm';

@Entity({ name: 'sliders' })
@Unique(['type', 'title'])
export class Slider {
    @PrimaryGeneratedColumn()
    pk: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'text', nullable: false })
    details: string;

    @Column({ type: 'text', nullable: true })
    icon: string;

    @Column({ type: 'text', nullable: false })
    image: string;

    @Column({ default: false })
    archived: boolean;
}
