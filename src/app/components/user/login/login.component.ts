import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AccountService } from '../../../service/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AccountService, private router: Router) {}

   public login(): void {
    this.authService.login(this.username, this.password).subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        // Autenticação bem-sucedida, redirecione para o dashboard
        this.router.navigate(['/dashboard']);
      } else {
        // Autenticação falhou
        console.log('Usuário ou senha inválidos');
      }
    });
  }
}
