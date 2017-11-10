import { Component, Inject } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ProjectService } from '../services/project.service';


@Component({
  selector: 'project-add',
  templateUrl: '../templates/project-add.component.html',
  providers: [ProjectService]
})
export class ProjectAddComponent {
  projectService = null;

  constructor(public dialog: MatDialog, projectService: ProjectService) {
    this.projectService = projectService;
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(ProjectAddDialog, {
      width: '750px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.projectService.addProjectInProjectList({id: result.id, name: result.projectName, description: result.description});
      }
    });
  }

}

@Component({
  selector: 'project-add-dialog',
  templateUrl: '../templates/project-add-dialog.html',
})
export class ProjectAddDialog {


  constructor(
    public dialogRef: MatDialogRef<ProjectAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    save(form): void {
      // Save call
      // ......
      let value = form.value
      // temp id for routing
      value.id = Math.ceil(Math.random() * 100);
      // temp id for routing
      this.dialogRef.close(value);
    }
    cancel(): void {
      this.dialogRef.close();
    }

}
