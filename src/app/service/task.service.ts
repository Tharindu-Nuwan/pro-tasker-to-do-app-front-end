import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {TaskDto} from "../dto/task.dto";

@Injectable()
export class TaskService {

  private readonly API_BASE_URL ='http://localhost:8080/api/v1/tasks';
  private taskList: Array<TaskDto> = [];
  constructor(private http: HttpClient,
              private authService: AuthService) {
    this.http.get<Array<TaskDto>>(`${this.API_BASE_URL}?email=${this.authService.getPrinciple()?.email}`)
      .subscribe(tasklist => this.taskList = tasklist);
  }

  getAllTasks() {
    return this.taskList;
  }
}
