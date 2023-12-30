import { Component } from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-task-list',
  template: `
    <main class="p-2.5 flex flex-col gap-2.5">
      @if (taskService.isInitialized()) {
        @for (task of taskService.getAllTasks(); track $index) {
          <app-task [task]="task" />
        } @empty {
          <div class="text-center text-slate-300 mt-3">No Tasks Yet!</div>
        }
      } @else {
        <div class="flex justify-center items-center w-full fixed top-0 z-50">
          <app-loader />
        </div>
      }

    </main>
  `,
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  constructor(public taskService: TaskService) {

  }
}
