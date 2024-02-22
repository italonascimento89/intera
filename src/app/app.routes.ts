import { Routes } from '@angular/router';
import { ListaAndaresComponent } from './components/lista-andares/lista-andares.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { LoginComponent } from './components/user/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/lista-andares', component: ListaAndaresComponent, canActivate: [AuthGuard] },
  { path: 'pesquisa', component: PesquisaComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
];

