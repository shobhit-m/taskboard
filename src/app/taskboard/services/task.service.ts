import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task'


@Injectable()
export class TaskService{

  private taskList: Task[];

  constructor(private http: HttpClient){
    // this.taskList = TASKS;
    this.taskList = [];
  }

  getTaskList(): Task[] {
    var taskList: Task[] = [];
    // Make the HTTP request:
    // to serve static file, 'Any extra files you want to include in the build/serve should be added to the assets property in .angular-cli.json.'
    this.http.get<Task[]>('/taskList.json').subscribe(result => {
      // Read the result field from the JSON response.
      for (let entry of result) {
        taskList.push(entry);
      }
    });
    // This is used when we add any task client side.
    this.taskList = taskList;
    // This is used when we add any task client side.
    
    return taskList;
  }

  addTaskInTaskList(task: Task): void {
    this.taskList.unshift(task);
  }


}


// mocking task
// export const TASKS: Task[] = [
//   {
//     id:123,
//     title: "code review and code comment of amazon s3 data migration.  hhg hghgh asd asd asda sd asd asd asdadsasd asda sd",
//     taskId:"#123456789",
//     type: "Other",
//     sprint: "1.1.35", // optional
//     members: "", // members in a task
//     estimation: "4", // in hours
//     date:"", // date on which task is performed
//     duration:"", // duration for which task is performed on that day; need to think on when status of a task is changed multiple times on a single day
//     createdDate: "",
//     updatedDate: "",
//     isEdit: false,
//     status: "paused", // unstarted, started, paused, completed
//   },
//   {
//     id:124,
//     title: "added the tasks in 'campus technologies tasks' sheet",
//     taskId: null,
//     type: "Other",
//     sprint: "1.1.35", // optional
//     members: [], // members in a task
//     estimation: "0.5", // in hours
//     date:"", // date on which task is performed
//     duration:"", // duration for which task is performed on that day; need to think on when status of a task is changed multiple times on a single day
//     createdDate: "",
//     updatedDate: "",
//     isEdit: false,
//     status: "unstarted", // unstarted, started, paused, completed
//   },
//   {
//     id:125,
//     title: "find changes suggested by Keshav sir in the mails",
//     taskId:null,
//     type: "Other",
//     sprint: "1.1.35", // optional
//     members: [], // members in a task
//     estimation: "1.5", // in hours
//     date:"", // date on which task is performed
//     duration:"", // duration for which task is performed on that day; need to think on when status of a task is changed multiple times on a single day
//     createdDate: "",
//     updatedDate: "",
//     isEdit: false,
//     status: "completed", // unstarted, started, paused, completed
//   },
//   {
//     id:126,
//     title: "discussion with Chetna on amazon kinesis firehos",
//     taskId:null,
//     type: "Other",
//     sprint: "1.1.35", // optional
//     members: [], // members in a task
//     estimation: "1", // in hours
//     date:"", // date on which task is performed
//     duration:"", // duration for which task is performed on that day; need to think on when status of a task is changed multiple times on a single day
//     createdDate: "",
//     updatedDate: "",
//     isEdit: false,
//     status: "started", // unstarted, started, paused, completed
//   },
//   {
//     id:127,
//     title: "code review and code comment of amazon s3 data migration.  hhg hghgh asd asd asda sd asd asd asdadsasd asda sd",
//     taskId:"#123456789",
//     type: "Other",
//     sprint: "1.1.35", // optional
//     members: [], // members in a task
//     estimation: "", // in hours
//     date:"", // date on which task is performed
//     duration:"", // duration for which task is performed on that day; need to think on when status of a task is changed multiple times on a single day
//     createdDate: "",
//     updatedDate: "",
//     isEdit: false,
//     status: "started", // unstarted, started, paused, completed
//   },
//   {
//     id:128,
//     title: "code review and code comment of amazon s3 data migration.  hhg hghgh asd asd asda sd asd asd asdadsasd asda sd",
//     taskId:"#123456789",
//     type: "Other",
//     sprint: "1.1.35", // optional
//     members: [], // members in a task
//     estimation: "", // in hours
//     date:"", // date on which task is performed
//     duration:"", // duration for which task is performed on that day; need to think on when status of a task is changed multiple times on a single day
//     createdDate: "",
//     updatedDate: "",
//     isEdit: false,
//     status: "started", // unstarted, started, paused, completed
//   }
// ];
