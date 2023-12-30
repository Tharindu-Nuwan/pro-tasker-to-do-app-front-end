export class TaskDto {

  constructor(public id: number,
              public description: string,
              public status: boolean,
              public email: string) {
  }
}
