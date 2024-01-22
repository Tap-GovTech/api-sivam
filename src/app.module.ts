import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { SivamModule } from './modules/sivam/sivam.module';
@Module({
  imports: [    
    SivamModule, AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(       
    @InjectDataSource('SivamConnection') private sivamConnection: DataSource,
  ) {        
  }

  onApplicationShutdown(signal?: string) {
    console.log('*** Close Connections ***');
    if(this.sivamConnection.isInitialized) this.sivamConnection.destroy();
  }
}
