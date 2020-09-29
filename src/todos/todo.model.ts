import { time } from "uniqid";

export class Todo {
  // todo schema design
  // convenient shortcut of ts class property definition
  public id: string;
  public title: string;
  public done: boolean;
  constructor(title: string) {
    this.title = title;
    this.id = time();
    this.done = false;
  }
}