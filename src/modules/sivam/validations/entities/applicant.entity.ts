import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";
import { ApplicantType } from "./applicant-type.entity";

@Entity({name: 'cat_requirentes'})
export class Applicant {
    @PrimaryGeneratedColumn()
    idrequirente: number;

    @Column()
    nombre: string;    

    @Column()
    razon_social: string;

    @Column()
    rfc: string; 
    
    @Column()
    direccion: string;

    @Column()    
    idtipo_requirente: string;

    @OneToMany(type => ApplicantType, applicantType => applicantType.requirente)
    @JoinColumn({name: 'idtipo_requirente'})
    tipo_requirente: ApplicantType; 
}
