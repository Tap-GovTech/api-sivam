import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";

@Entity({name: 'validaciones'})
export class Validation {
    @PrimaryGeneratedColumn()
    idvalidacion: number;
    
    @Column()
    ejercicio_presupuestal: number;

    @Column()
    folio: string;
}
