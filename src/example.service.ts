import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getExample(): string {
    return 'Ejemplo';
  }
}