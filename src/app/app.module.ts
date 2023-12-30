import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { HeaderComponent } from './view/header/header.component';
import { FormComponent } from './view/form/form.component';
import { TaskListComponent } from './view/task-list/task-list.component';
import { TaskComponent } from './view/task/task.component';
import { LoginComponent } from './view/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {authGuard} from "./guard/auth.guard";
import { LoaderComponent } from './view/loader/loader.component';
import {AuthService} from "./service/auth.service";
import {TaskService} from "./service/task.service";
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {errorInterceptor} from "./interceptor/error.interceptor";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: MainComponent,
    canActivate: [authGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FormComponent,
    TaskListComponent,
    TaskComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp({
      "projectId": "pro-tasker-todo-app-angular",
      "appId": "1:646987060991:web:085669e051f0d75fff1eca",
      "storageBucket": "pro-tasker-todo-app-angular.appspot.com",
      "apiKey": "AIzaSyB_yR0Rq7mfVeybHZW2pRP-g_7dfjAWMQo",
      "authDomain": "pro-tasker-todo-app-angular.firebaseapp.com",
      "messagingSenderId": "646987060991"
    })),
    provideAuth(() => getAuth()),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      progressBar: true,
      timeOut: 5000
    })
  ],
  providers: [AuthService, TaskService,
    provideHttpClient(withInterceptors([errorInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
