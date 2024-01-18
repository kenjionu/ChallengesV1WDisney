import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  url = 'http://localhost:3001/sections';

  async getAllSectionsServices(): Promise<any[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getSectionsServiceById(id: number): Promise<any | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }


}

