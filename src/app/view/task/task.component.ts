import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <div class="group flex flex-row items-center justify-between gap-2 hover:bg-gradient-to-r from-indigo-700 to-cyan-600 p-2.5 rounded-lg">
      <div class="flex flex-row items-center gap-2 ">
        <input class="accent-amber-500 w-6 h-6 ml-2 bg-slate-700 rounded-md text-emerald-500 peer"
               type="checkbox" name="" id="chk">
        <label class="peer-checked:line-through peer-checked:text-gray-500 text-slate-200 text-2xl cursor-pointer" for="chk">Task 1</label>
      </div>
      <div title="Delete" class="mr-2 hidden group-hover:block font-4xl">
        <span class="material-symbols-outlined text-amber-400 hover:text-red-500 hover:cursor-pointer">
            delete
        </span>
      </div>
    </div>
  `,
  styleUrl: './task.component.scss'
})
export class TaskComponent {

}
