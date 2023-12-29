import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-header />
    <app-form />
    <app-task-list />
  `,
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
