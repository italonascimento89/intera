import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/identity/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLogged(): boolean {
    return this.isLoggedIn;
  }
  private users: User[] = [
    { username: 'renan', password: '123456' },
    { username: 'bruno', password: '123456' },
    { username: 'augusto', password: '123456' },
    { username: 'junior', password: '123456' },
    { username: 'khalil', password: '123456' }
  ];

    private isLoggedIn: boolean = false;
    // Outros métodos e propriedades...



    public login(username: string, password: string): Observable<boolean> {
      const user = this.users.find(u => u.username === username);

      if (!user) {
        return of(false);
      }

      const isAuthenticated = user.password === password;

      if (isAuthenticated) {
        this.isLoggedIn = true; // Definindo o estado de login como verdadeiro
        return of(true);
      }

      return of(false);
    }
  }

