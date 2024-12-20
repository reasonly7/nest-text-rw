import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { TextFileService } from './text-file.service';

@Module({
  imports: [importConfigModule()],
  controllers: [AppController],
  providers: [TextFileService],
})
export class AppModule {}
