import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="h-screen flex justify-center items-center w-full -z-50">
      <div class="lds-circle"><div></div></div>
    </div>
  `,
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

}
