import { Injectable } from '@nestjs/common';
import { Invoice } from './entities/invoice.entity';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Applicant } from './entities/applicant.entity';
import { Validation } from './entities/validation.entity';

@Injectable()
export class ValidationsService {
  constructor(    
    @InjectRepository(Invoice, 'SivamConnection') private sivamRepository: Repository<Invoice>,
    @InjectRepository(Applicant, 'SivamConnection') private applicatRepository: Repository<Applicant>,
    @InjectRepository(Validation, 'SivamConnection') private validationRepository: Repository<Validation>,
  ) {        
  }

  findAllApplicants(): Promise<Applicant[]> {          
    return this.applicatRepository.find({
      relations: ['tipo_requirente']
    });
  } 

  async findAllInovices(folio: string, year: number): Promise<Invoice[]> {   
    
    const validation: Validation = await this.validationRepository.findOne({
      where: {
        folio: Equal(folio),
        ejercicio_presupuestal: Equal(year)
      }
    });        
    
    return this.sivamRepository.find({              
      where: {
        idvalidacion: Equal(validation.idvalidacion)
      },              
    });
  }  
  
}
