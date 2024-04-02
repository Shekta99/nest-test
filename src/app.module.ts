import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExampleController } from './example/example.controller';
import { AppService } from './app.service';
import { ExampleService } from './example/example.service';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('example');
  }
}
