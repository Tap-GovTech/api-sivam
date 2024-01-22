import { Module } from '@nestjs/common';
import { ValidationsService } from './validations.service';
import { ValidationsController } from './validations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { Applicant } from './entities/applicant.entity';
import { ApplicantType } from './entities/applicant-type.entity';
import { Validation } from './entities/validation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invoice, Applicant, ApplicantType, Validation], 'SivamConnection'),
  ],
  controllers: [ValidationsController],
  providers: [ValidationsService]
})
export class ValidationsModule {}
