import { Component } from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskService} from "../../service/task.service";
import {animate, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-task-list',
  template: `
    <main class="p-2.5 flex flex-col gap-2.5">
      @if (taskService.isInitialized()) {
        @for (task of taskService.getAllTasks(); track task.id) {
          <app-task @task [task]="task" />
        } @empty {
          <div class="text-center text-slate-300 mt-3 animate__animated animate-bounce animate__delay-1s">No Tasks Yet!</div>
        }
      } @else {
        <div class="flex justify-center items-center w-full fixed top-0 z-50">
          <app-loader />
        </div>
      }

    </main>
  `,
  styleUrl: './task-list.component.scss',
  animations: [
    trigger('task', [
      transition(":leave", [
        animate(250, style({transform:'translateX(-100%)'}))
      ])
    ])
  ]
})
export class TaskListComponent {

  constructor(public taskService: TaskService) {

  }
}
