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

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: string): Todo {
    return this.todos.find( todo => todo.id === id );
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex( todo => todo.id === id);
    this.todos.splice(index, 1);
  }
}
