import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  addTodo(title: string): Todo {
    const newTodo = new Todo(title);
    this.todos.push(newTodo);
    return newTodo;
  }
}
