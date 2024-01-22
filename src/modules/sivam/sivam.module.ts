import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidationsModule } from './validations/validations.module';
import { Invoice } from './validations/entities/invoice.entity';
import { Applicant } from './validations/entities/applicant.entity';
import { ApplicantType } from './validations/entities/applicant-type.entity';
import { Validation } from './validations/entities/validation.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            port: 3306,  
            host: '187.217.217.238',
            password: 'GobHon1821Sis*',
            synchronize: false,
            logging: true,
            name: 'SivamConnection',
            username: 'sistemas',
            database: 'validaciones',
            entities: [Invoice, Applicant, ApplicantType, Validation],
        }),
        ValidationsModule,    
    ],
})
export class SivamModule {}
