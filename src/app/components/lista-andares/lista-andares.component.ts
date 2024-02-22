import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-andares',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule],
  templateUrl: './lista-andares.component.html',
  styleUrl: './lista-andares.component.scss'
})
export class ListaAndaresComponent {

}
