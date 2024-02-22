import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent, } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { Toast } from 'ngx-toastr';

import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ListaAndaresComponent } from './components/lista-andares/lista-andares.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,  DashboardComponent, PesquisaComponent, ListaAndaresComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  collopsed = signal(false)
  title = 'interate';

}


