import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <form action="" class="flex p-2 gap-2 border-b">
      <input type="text"
             placeholder="Eg: Finish To-Do App"
             class="border flex-grow p-2 px-2 outline-0 rounded-xl
                    focus:ring-1 hover:border-sky-300 focus:ring-cyan-500
                    bg-transparent border-sky-500 caret-sky-500 text-white"
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

}
