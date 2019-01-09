import { Component, OnInit } from '@angular/core';
import { Project } from './project/models/project.model';
import { ProjectService } from './services/project.service';

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
  this.projects = this.projectService.getProjects();
  }

  add(name: string, describtion: string, goal: number): void{

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

