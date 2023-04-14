import { Component } from '@angular/core';
import { Categoria } from 'src/app/features/categorias/models/categoria.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ]

  tiposDeEntradas = [
    'Receita',
    'Despesa'
  ];

  statusDePagamento = [
   {value: true, descricao: 'Pago'},
   {value: false, descricao: 'Pendente'}
  ];

  categorias: Categoria[] = [];

  
}
