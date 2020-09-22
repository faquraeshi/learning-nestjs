import { Controller, Post, Body, Get } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  addTodo(
    @Body('title') title: string
  ) {
    const todoId = this.todosService.addTodo(
      title
    );
    return {id: todoId};
  }
}
