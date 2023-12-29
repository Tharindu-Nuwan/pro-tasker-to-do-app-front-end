import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="flex justify-between border-b p-3 align-middle">
      <h1
        class="flex items-center text-4xl font-bold bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text text-transparent">
        <span
          class="material-symbols-outlined text-5xl font-bold bg-gradient-to-r from-lime-600 to-cyan-600 bg-clip-text text-transparent pr-2">
            task_alt
        </span>
        <span
          class="text-5xl font-bold bg-gradient-to-b from-amber-600 to-violet-600 bg-clip-text text-transparent">P</span>ro
        <span
          class="text-5xl font-bold bg-gradient-to-b from-amber-600 to-violet-600 bg-clip-text text-transparent">T</span>asker
      </h1>
      <div #avatar (click)="onAvatarClick($event, avatar)"
        class="relative w-12 border bg-sky-700 border-gray-600 cursor-pointer rounded-full hover:shadow-lg hover:shadow-cyan-600 text-white font-bold
                    flex items-center justify-center text-xl">U
        <div #userMenu
             class="hidden flex-col gap-2 shadow shadow-gray-700 font-normal text-center absolute border top-full mt-1 right-0 p-2 border-gray-600 rounded bg-[#1E1F22] px-3">
          <div>someone&#64;ijse.lk</div>
          <div class="whitespace-nowrap px-3">Hi, Tharindu Nuwan Madhushanka!</div>
          <div class="group flex items-center justify-center bg-slate-500 hover:bg-slate-700 cursor-pointer p-2 rounded-xl">
              <span class="material-symbols-outlined mr-2 group-hover:text-lime-500">
                logout
            </span>
            Sign Out
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('userMenu')
  userMenuElm!: ElementRef<HTMLDivElement>

  @HostListener('document:click')
  onDocumentClick() {
    const userMenu = this.userMenuElm.nativeElement;
    if (userMenu.classList.contains("flex")) {
      userMenu.classList.toggle('flex');
      userMenu.classList.toggle('hidden');
    }
  }

  onAvatarClick($event: MouseEvent, avatar: HTMLDivElement) {
      $event.stopPropagation();
      if ($event.target != avatar) return;
      this.userMenuElm.nativeElement.classList.toggle('flex');
      this.userMenuElm.nativeElement.classList.toggle('hidden');
  }
}
