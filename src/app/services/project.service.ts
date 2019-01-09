import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(){
    return[
      {
        name: 'project 1',
        describtion: 'describtion project 1',
        goal: 200000,
        balance: 105234,
      },
      {
        name: 'project 2',
        describtion: 'describtion project 2',
        goal: 75000,
        balance: 34755,
      },
      {
        name: 'project 3',
        describtion: 'describtion project 3',
        goal: 120000,
        balance: 25234,
      }
    ]
  }
}
