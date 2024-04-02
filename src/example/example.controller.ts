import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { CreateMessageDTO } from './dto/create-message-dto';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}
  @Get()
  getExample(): string {
    return this.exampleService.getExample();
  }

  @Post()
  createExample(@Body() createExample: CreateMessageDTO): string {
    return this.exampleService.createExample(createExample);
  }
}
