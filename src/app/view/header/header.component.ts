import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="flex justify-between border-b p-3 align-middle">
      <h1 class="flex items-center text-4xl font-bold bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text text-transparent">
        <span class="material-symbols-outlined text-5xl font-bold bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text text-transparent pr-2">
            task_alt
        </span>
        <span
          class="text-5xl font-bold bg-gradient-to-b from-amber-600 to-violet-600 bg-clip-text text-transparent">P</span>ro
        <span
          class="text-5xl font-bold bg-gradient-to-b from-amber-600 to-violet-600 bg-clip-text text-transparent">T</span>asker
      </h1>
      <img src="" alt="Profile Picture">
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
