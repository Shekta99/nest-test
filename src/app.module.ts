import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExampleController } from './example.controller';
import { AppService } from './app.service';
import { ExampleService } from './example.service';

@Module({
  imports: [],
  controllers: [AppController,ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
