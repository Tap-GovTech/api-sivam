import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn} from "typeorm";

@Entity({name: 'validaciones_facturas'})
export class Invoice {
    @PrimaryGeneratedColumn()
    idfactura: number;
    
    @Column()
    idvalidacion: number;

    @Column()
    factura: string;    

    @Column()
    fecha: string;
    
    @Column({type: "decimal", precision: 2 })
    importe: number;

    @Column()
    mes: number;

    @Column()
    observaciones: string;
}
