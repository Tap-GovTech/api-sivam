import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import { Applicant } from "./applicant.entity";

@Entity({name: 'cat_tipo_requirentes'})
export class ApplicantType {
    @PrimaryGeneratedColumn()
    idtipo_requirente: number;

    @Column()
    tipo_requirente: string;

    @ManyToOne(type => Applicant, applicant => applicant.tipo_requirente)
    @JoinColumn({name: 'idtipo_requirente', referencedColumnName: 'idtipo_requirente'})
    requirente: Applicant[];
}
