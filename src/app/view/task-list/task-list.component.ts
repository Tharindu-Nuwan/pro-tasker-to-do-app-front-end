import { Component } from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-task-list',
  template: `
    <main class="p-2.5 flex flex-col gap-2.5">
      @for (task of taskService.getAllTasks(); track $index) {
        <app-task [task]="task" />
      }
    </main>
  `,
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  constructor(public taskService: TaskService) {

  }
}
