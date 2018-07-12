import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  load(key: string) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  }

  save(key: string, payload: any[]) {
    localStorage.setItem(key, JSON.stringify(payload));
  }
}
