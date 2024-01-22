import { Injectable } from '@nestjs/common';
import { Invoice } from './entities/invoice.entity';
import { Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Applicant } from './entities/applicant.entity';

@Injectable()
export class ValidationsService {
  constructor(    
    @InjectRepository(Invoice, 'SivamConnection') private sivamRepository: Repository<Invoice>,
    @InjectRepository(Applicant, 'SivamConnection') private applicatRepository: Repository<Applicant>,
  ) {        
  }

  findAllApplicants(): Promise<Applicant[]> {          
    return this.applicatRepository.find({
      relations: ['tipo_requirente']
    });
  } 

  findAll(idvalidation: number): Promise<Invoice[]> {          
    return this.sivamRepository.find({              
      where: {
        idvalidacion: Equal(idvalidation)
      },              
    });
  }  
  
}
