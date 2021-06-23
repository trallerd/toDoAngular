import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Tarefas do dia';

  constructor() {
    this.todos.push('Tarefa 01');    
    this.todos.push('Tarefa 02');    
    this.todos.push('Tarefa 03');    
  }

  aletrarTexto() {
    this.title = 'Muda Texto GG'
  }
}
