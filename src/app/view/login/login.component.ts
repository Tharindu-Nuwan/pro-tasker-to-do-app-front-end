import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <div class="h-screen flex justify-center items-center">
      <div class="flex flex-col gap-3 items-center justify-center">
        <div>
          <h1
            class="flex justify-center items-center text-4xl font-bold bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text text-transparent">
        <span
          class="material-symbols-outlined text-5xl bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text text-transparent pr-2">
            task_alt
        </span>
            <span
              class="text-5xl font-bold bg-gradient-to-b from-amber-600 to-violet-600 bg-clip-text text-transparent">P</span>ro
            <span
              class="text-5xl font-bold bg-gradient-to-b from-amber-600 to-violet-600 bg-clip-text text-transparent">T</span>asker
          </h1>
        </div>

        <div class="text-slate-300">
            Please Sign In with your Google account to continue...
        </div>
        <div>
          <button (click)="onClick()" class="inline-flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <span class="text-slate-200 font-bold text-2xl pr-2">G</span>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private authService: AuthService, private routerServise: Router) {
  }

  onClick() {
    this.authService.signIn().then(user => {
      this.routerServise.navigateByUrl('/app')
    });
  }
}
