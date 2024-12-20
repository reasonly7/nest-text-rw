import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'node:fs';

@Injectable()
export class TextFileService {
  filePath: string;
  constructor(private readonly configService: ConfigService) {
    this.filePath = configService.get('app.filePath');
  }

  getTextFile() {
    if (!this.filePath) {
      throw new InternalServerErrorException('app.filePath is not exist');
    }
    return fs.readFileSync(this.filePath).toString('utf-8');
  }

  setTextFile(newText: string) {
    fs.writeFileSync(this.filePath, newText, 'utf-8');
  }
}
