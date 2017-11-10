import { Injectable } from '@angular/core';

import { Project } from '../models/project';

@Injectable()
export class ProjectService {

  private projectList: Project[];

  constructor(){
    this.projectList = PROJECTS;
  }

  getProjectList(): Project[] {
    return this.projectList;
  }

  addProjectInProjectList(project: Project): void {
    this.projectList.unshift(project);
  }


}

// mocking project list
export const PROJECTS: Project[] = [
  {id: 1, name: "Project1", description: "This is project 1"},
  {id: 2, name: "Project2", description: "This is project 2"},
  {id: 3, name: "Project3", description: "This is project 3"},
  {id: 4, name: "Project4", description: "This is project 4"},
  {id: 5, name: "Project5", description: "This is project 5"},
  {id: 6, name: "Project6", description: "This is project 6"},
  {id: 7, name: "Project7", description: "This is project 7"},
  {id: 8, name: "Project8", description: "This is project 8"}
];
