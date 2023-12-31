import {Component, Input} from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-task',
  template: `
    <div
      class="animate__animated animate__bounceInUp animate__faster group flex flex-row items-center justify-between gap-2 hover:bg-gradient-to-r from-indigo-700 to-cyan-600 p-2.5 rounded-lg">
      <div class="flex flex-row items-center gap-2 ">
        <input (change)="onChange()" class="accent-amber-500 w-6 h-6 ml-2 bg-slate-700 rounded-md text-emerald-500 peer"
               type="checkbox" name="" id="chk-{{task.id}}"
               [checked]="task.status">
        <label class="peer-checked:line-through peer-checked:text-gray-500 text-slate-200 text-2xl cursor-pointer"
               for="chk-{{task.id}}">
          {{ task.description }}
        </label>
      </div>
      <div (click)="onDeleteClick()" title="Delete" class="mr-2 hidden group-hover:block font-4xl">
        <span class=" select-none material-symbols-outlined text-amber-400 hover:text-red-500 hover:cursor-pointer">
            delete
        </span>
      </div>
    </div>
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input()
  task!: TaskDto;


  constructor(private taskService: TaskService) {
  }

  onDeleteClick() {
    this.taskService.deleteTask(this.task);
  }

  onChange() {
    this.taskService.updateTask(this.task);
  }
}
