import { timeStamp } from "console";
import { time } from "uniqid";

export class Todo {
  // todo schema design
  // convenient shortcut of ts class property definition
  public id: string;
  public done: boolean;
  constructor(
    public title: string,
  ) {
    this.id = time();
    this.done = false;
  }
}