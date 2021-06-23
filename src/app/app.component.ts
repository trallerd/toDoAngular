import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Tarefas do dia';

  constructor() {
    this.todos.push(new Todo(1,'Tarefa 1', false));    
    this.todos.push(new Todo(2,'Tarefa 2', false));    
    this.todos.push(new Todo(3,'Tarefa 3', true));    
  }

  aletrarTexto() {
    this.title = 'Muda Texto GG'
  }
}
