import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AccountService } from '../service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService , private router: Router) {}

  canActivate(): boolean {
    if (this.accountService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
