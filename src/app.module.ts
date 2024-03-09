import { Module } from '@nestjs/common';
import { ModuleModule } from './module/module.module';
import { BookModule } from './module/book/book.module';

@Module({
  imports: [ModuleModule, BookModule],
 
})
export class AppModule {}
