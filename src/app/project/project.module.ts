import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './components/projects.component';
import { ProjectMembersComponent } from './components/project-members.component';
import { ProjectAddComponent, ProjectAddDialog } from './components/project-add.component';
import { ProjectService } from './services/project.service';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [
    ProjectsComponent, ProjectMembersComponent, ProjectAddComponent, ProjectAddDialog
  ],
  imports: [
    CommonModule, FormsModule,
    SharedModule,
    ProjectRoutingModule
  ],
  providers: [
    ProjectService
  ],
  exports: [
    ProjectsComponent, ProjectMembersComponent, ProjectAddComponent
  ],
  entryComponents: [ProjectAddDialog]
})
export class ProjectModule { }
