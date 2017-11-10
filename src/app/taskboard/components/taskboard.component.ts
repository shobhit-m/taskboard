import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task'

@Component({
  selector: 'taskboard',
  templateUrl: '../templates/taskboard.component.html',
  providers: [],
  styleUrls: ['../styles/taskboard.component.css']
})
export class TaskboardComponent implements OnInit{

  private taskList: Task[];

  constructor(private taskService: TaskService){
    this.taskList = [];
  }

  ngOnInit() {
    // make service calls
    // we can't add complex logic, server calls in constructor
    // so we use ngOnInit
    this.taskList = this.taskService.getTaskList();
  }




  onClick = function(event){
    event.stopPropagation();
    console.info(event)
  }

}
