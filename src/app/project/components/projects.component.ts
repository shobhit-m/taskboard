import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';

@Component({
  selector: 'projects',
  templateUrl: '../templates/projects.component.html',
})
export class ProjectsComponent {

  title = "Projects Listing"
  projects: Project[];

  constructor(service: ProjectService, private route: ActivatedRoute, private router: Router){
    this.projects = service.getProjectList();
  }

  gotoMembers(projectId: Number) {
    this.router.navigate(["projects",projectId,"members"]);
  }

}
