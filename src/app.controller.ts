import { Body, Controller, Get, HttpCode, Put } from '@nestjs/common';
import { TextFileService } from './text-file.service';

@Controller()
export class AppController {
  constructor(private readonly textFileService: TextFileService) {}

  @Get()
  sayHello() {
    return 'Hello, World!';
  }

  @Get('/text-file')
  getTextFile() {
    return JSON.parse(this.textFileService.getTextFile());
  }

  @Put('/text-file')
  @HttpCode(201)
  setTextFile(@Body() text: string) {
    console.log(text)
    return
    return this.textFileService.setTextFile(text);
  }
}
