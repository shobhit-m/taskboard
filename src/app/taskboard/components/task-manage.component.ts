import { Component, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Task } from '../models/task'
import { TaskService } from '../services/task.service'


@Component({
  selector: 'task-manage',
  templateUrl: '../templates/task-manage.component.html',
  providers: []
})
export class TaskManageComponent {

  @Input() task: Task;

  constructor(public dialog: MatDialog, private taskService: TaskService) {}


  openDialog(): void {
    let dialogRef = this.dialog.open(TaskManageDialog, {
      width: '750px',
      data: { task: this.task },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.info(result);
        var task = {
          id:result.id,
          title: result.title,
          taskId:result.taskId,
          type: result.type,
          sprint: result.sprint,
          members: "",
          estimation: result.estimation,
          date:"",
          duration:"",
          createdDate: "",
          updatedDate: "",
          isEdit: false,
          status: "unstarted",
        }
        if (!this.task) {
          this.taskService.addTaskInTaskList(task);
        }
      }
    });
  }
}


@Component({
  selector: 'task-manage-dialog',
  templateUrl: '../templates/task-manage-dialog.html',
})
export class TaskManageDialog {

  public task: Task;
  public taskTypes: ['Other', 'Development', 'Research', 'Requirement Analysis', 'Documentation', 'Discussion', 'Scrum'];
  private tempTask = {};

  constructor(
    public dialogRef: MatDialogRef<TaskManageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.task = data.task || new Task();
      Object.assign(this.tempTask, this.task);
    }

    save(form): void {
      // Save call
      // ......
      let value = form.value
      // temp id for routing
      value.id = Math.ceil(Math.random() * 100);
      // temp id for routing
      this.setIsEditForTaskCard(false);
      this.dialogRef.close(value);
    }
    cancel(): void {
      Object.assign(this.task, this.tempTask);
      this.setIsEditForTaskCard(false);
      this.dialogRef.close(null);
    }

    setIsEditForTaskCard(isEdit): void{
      if (this.task.id) {
        this.task.isEdit = isEdit;
      }
    }

}
