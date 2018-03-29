import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TodoService } from './todos.service';
import { ITodo } from './todos';

@Component({
  selector: 'app-create-todos',
  templateUrl: './create-todos.component.html',
  styleUrls: ['./create-todos.component.scss']
})
export class CreateTodosComponent implements OnInit {
  constructor(private _http: HttpClient, private _todoService: TodoService) {}
  todos: ITodo[] = [];
  showArchived = false;
  checked: boolean;

  toggleArchived(): void {
    this.showArchived = !this.showArchived;
  }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }
}
