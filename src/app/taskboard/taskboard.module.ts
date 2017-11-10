import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TaskService } from './services/task.service';
import { TaskManageComponent, TaskManageDialog } from './components/task-manage.component';
import { TaskboardComponent } from './components/taskboard.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TaskboardComponent, TaskManageComponent, TaskManageDialog
  ],
  imports: [
    CommonModule, FormsModule,
    SharedModule,BrowserAnimationsModule
  ],
  providers: [
    // for singleton service
    TaskService
  ],
  exports: [
    TaskboardComponent, TaskManageComponent
  ],
  entryComponents: [TaskManageDialog]
})
export class TaskboardModule { }
