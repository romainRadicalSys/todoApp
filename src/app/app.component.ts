import { Component } from '@angular/core';
import { TodoService } from './create-todos/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'app';
}
