import { Injectable } from '@angular/core';
import {Auth, authState, GoogleAuthProvider, signInWithPopup, User, signOut} from "@angular/fire/auth";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private initialized = false;
  private userSubject = new BehaviorSubject<User|null|undefined>(undefined);

  constructor(private auth: Auth) {
    authState(auth).subscribe(user => {
      this.initialized = true;
      this.userSubject.next(user);
    });
  }

  signIn(){
   return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  isInitialized() {
    return this.initialized;
  }

  getPrinciple(){
    return this.userSubject.asObservable();
  }

  signOut() {
    return signOut(this.auth);
  }
}
