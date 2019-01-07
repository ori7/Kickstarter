import { Component, OnInit } from '@angular/core';
import { Project } from './project/models/project.model';
import { ProjectService } from './servises/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private projectService:ProjectService) { 

  }
  
  projects:Project[];
  
  ngOnInit(): void {
  this.projects = [
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

  add(name: string, describtion: string, goal: number){

    if (!name || !describtion || !goal || isNaN(Number(goal))) return;
    const project = <Project>{
      name: name,
      describtion: describtion,
      goal: Number(goal),
      balance: 0
    }
    this.projects.push(project)
  }
}

