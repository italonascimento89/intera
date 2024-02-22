import { Component, Input, OnInit, computed, signal, } from '@angular/core';
import {MatButtonModule,} from '@angular/material/button';


import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ListaAndaresComponent } from '../lista-andares/lista-andares.component';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';


export type MenuItem ={
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ListaAndaresComponent,PesquisaComponent, CommonModule, MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  sideNavCollapsed = signal(false);
  ngOnInit(): void {

  }
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val)
  }


  leftDrawerOpen = false;

  toggleLeftDrawer(): void {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }

  sidenavWidth(): string {
    return this.leftDrawerOpen ? '250px' : '65px';
  }

  linksList: MenuItem[] = [
    {
      label: 'Lista de Andares',
      icon: 'format_list_bulleted',
      route: 'lista-andares',
    },
    {
      label: 'Pesquisar',
      icon: 'search',
      route: 'pesquisa',
    },
    {
      label: 'Leitura de Agua',
      icon: 'waves',
      route: 'agua',
    },
    {
      label: 'Anotações',
      icon: 'note',
      route: 'anotacao',
    },
    {
      label: 'Relatorio',
      icon: 'description',
      route: 'relatorio',
    },
    {
      label: 'Logout',
      icon: 'logout',
      route: 'logout',
    }
  ];


}


