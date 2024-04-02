import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getExample(): string {
    return 'Ejemplo';
  }

  createExample(message): string {
    return message;
    //throw new HttpException('server error', HttpStatus.ACCEPTED, {cause: "error captured here"});
  }
}
