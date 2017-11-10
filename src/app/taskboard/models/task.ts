export class Task {
  id: number;
  title: string;
  taskId: string; // task id in pivotal, bugzilla or jira
  type: string;
  sprint: string; // optional
  members: any; // members in a task
  estimation: string; // in hours
  date: string; // date on which task is performed
  duration: string; // duration for which task is performed on that day; need to think on when status of a task is changed multiple times on a single day
  createdDate: string;
  updatedDate: string;
  isEdit: boolean;
  status: string; // unstarted, started, paused, completed
}
