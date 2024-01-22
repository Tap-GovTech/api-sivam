import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import express = require('express');
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';

import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { ResponseAddHeaderInterceptor } from './interceptors/response.interceptor';

async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('./tapachula_gob_mx.key'),
  //   cert: fs.readFileSync('./tapachula_gob_mx.crt'),
  // };

  const server = express();
  
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server),
  );
  
  app.enableCors(); 
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Quita parámetros inválidos
    forbidNonWhitelisted: true, // Responde con error si envían parámetros inválidos
  }))

  app.useGlobalInterceptors(new ResponseAddHeaderInterceptor());
  app.enableShutdownHooks();
  await app.init();
  
  http.createServer(server).listen(3600);
  // https.createServer(httpsOptions, server).listen(3500); 
}

bootstrap();
