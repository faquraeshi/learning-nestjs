import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
