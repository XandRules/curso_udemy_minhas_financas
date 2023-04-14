import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minhas-financas';

  menu : any [] = [
    { descricao: 'Dashboard', rota: 'dashboard'},
    { descricao: 'Categorias', rota: 'categorias'},
    { descricao: 'Entradas', rota: 'entradas'},
  ]
}
