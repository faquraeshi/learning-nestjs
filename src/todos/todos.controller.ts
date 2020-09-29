import { Controller, Body, Param, Post, Get, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  addItem(@Body() body: any) {
    return this.todosService.addTodo(body.title);
  }

  @Get()
  getItmes() {
    return this.todosService.getTodos();
  }

  @Get(':id')
  getItem(@Param('id') id: string) {
    return this.todosService.getTodoById(id);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
