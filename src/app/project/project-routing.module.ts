import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent }    from './components/projects.component';
import { ProjectMembersComponent }  from './components/project-members.component';

const projectsRoutes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id/members',
    component: ProjectMembersComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule { }
