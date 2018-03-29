import { Injectable } from '@angular/core';
import { ITodo } from './todos';
@Injectable()
export class TodoService {
  getTodos(): ITodo[] {
    return [
      {
        task: 'Water the plant',
        done: false,
        dateCreated: '2018/03/25',
        dateCompleted: null,
        archived: false,
        creator: 'Romain'
      },
      {
        task: 'Go for run',
        done: true,
        dateCreated: '2018/03/25',
        dateCompleted: null,
        archived: false,
        creator: 'Romain'
      },
      {
        task: 'Cook dinner',
        done: true,
        dateCreated: '2018/03/25',
        dateCompleted: null,
        archived: false,
        creator: 'Romain'
      },
      {
        task: 'Do homework',
        done: false,
        dateCreated: '2018/03/25',
        dateCompleted: null,
        archived: false,
        creator: 'Romain'
      },
      {
        task: 'Cleaning House',
        done: false,
        dateCreated: '2018/03/25',
        dateCompleted: null,
        archived: false,
        creator: 'Romain'
      }
    ];
  }
}
