import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../service/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const routerService = inject(Router);
  const authService = inject(AuthService);
  return new Promise<boolean|UrlTree>(resolve => {
    authService.getPrinciple().subscribe(user => {
        if (user) {
          resolve(true);
        } else if (user === null) {
          resolve(routerService.createUrlTree(['/login']))
        }
    });
  })
};
