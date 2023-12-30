import { Component } from '@angular/core';
import {TaskDto} from "../../dto/task.dto";
import {TaskService} from "../../service/task.service";

@Component({
  selector: 'app-form',
  template: `
    <form (ngSubmit)="onSubmit(txt)" class="flex p-2 gap-2 border-b">
      <input #txt type="text"
             placeholder="Eg: Finish To-Do App"
             class="border flex-grow p-2 px-2 outline-0 rounded-xl
                    focus:ring-1 hover:border-sky-300 focus:ring-cyan-500
                    bg-transparent border-sky-500 caret-sky-500 text-white
                    selection:bg-amber-700"
      >
      <button class="border px-4 rounded-xl bg-gradient-to-r from-indigo-700 to-sky-600 text-white
                     hover:bg-gradient-to-tl hover:shadow-cyan-600 hover:shadow-md font-bold">
        ADD
      </button>
    </form>
  `,
  styleUrl: './form.component.scss'
})
export class FormComponent {


  constructor(private taskService: TaskService) {
  }

  async onSubmit(txtElm: HTMLInputElement) {
    if(!txtElm.value.trim()) {
      txtElm.focus();
      txtElm.select();
    } else {
      try {
        await this.taskService.createTask(txtElm.value.trim());
        txtElm.value = '';
        txtElm.focus();
      } catch (err) {}
    }
  }
}
