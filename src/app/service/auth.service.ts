import { Injectable } from '@angular/core';
import {Auth, authState, user} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {
    authState(auth).subscribe(user => {

    });
  }

  getPrinciple() {

  }
}
