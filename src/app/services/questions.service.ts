import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  url = 'http://localhost:3001/questions';

  constructor() { }

  async getAllQuestionsServices(): Promise<any[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getQuestionsServiceById(id: string): Promise<any | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  // submitApplication(firstName: string, lastName: string, email: string) {
  //   console.log(firstName, lastName, email);
  // }
}
