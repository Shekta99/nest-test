import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloSpanish(): string {
    return 'Hola Mundo!';
  }
}
