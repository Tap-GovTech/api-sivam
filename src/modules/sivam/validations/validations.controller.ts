import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, HttpStatus, Query, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { GuardsModule } from 'src/modules/auth/guards/guards.module';
import { ValidationsService } from './validations.service';
import { Invoice } from './entities/invoice.entity';
import { Applicant } from './entities/applicant.entity';

@Controller('api/sivam/validations')
export class ValidationsController {
  constructor(private readonly validationsService: ValidationsService) {}

  @Get('applicants')
  // @UseGuards(GuardsModule)
  findAllApplicants(
    @Res() res: Response,    
  ) {    
    return this.validationsService.findAllApplicants().then( (response: Applicant[]) => {
      return res.status(HttpStatus.OK).json({
          "statusCode": HttpStatus.OK,
          "message": "Requirentes recuperados con éxito",
          "facturas": response
      });
    }).catch(response => {      
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            "statusCode": HttpStatus.INTERNAL_SERVER_ERROR,
            "message": "Error en el servidor",
            "error": "Error en el servidor"
        });
    });
  }

  @Get('invoices')
  // @UseGuards(GuardsModule)
  findAll(
    @Res() res: Response,
    @Query('folio') folio: string,
    @Query('year') year: number,
  ) {    
    return this.validationsService.findAllInovices(folio, year).then( (response: Invoice[]) => {                        
      return res.status(HttpStatus.OK).json({
          "statusCode": HttpStatus.OK,
          "message": "Facturas recuperadas con éxito",
          "facturas": response
      });
    }).catch(response => {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            "statusCode": HttpStatus.INTERNAL_SERVER_ERROR,
            "message": "Error en el servidor",
            "error": "Error en el servidor"
        });
    });
  }
}
