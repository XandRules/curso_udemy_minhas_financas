import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/features/categorias/models/categoria.model';
import { CategoriaService } from 'src/app/features/categorias/service/categoria.service';
import { EntradasService } from '../../service/entradas.service';
import * as dayjs from 'dayjs'
import { Entrada } from '../../models/entrada.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{
  
  tiposDeEntradas = [
    'receita',
    'despesa'
  ];

  formEntradas!: FormGroup;
  
  statusDePagamento = [
    {value: true, descricao: 'Pago'},
    {value: false, descricao: 'Pendente'}
  ];
  
  categorias$!:Observable<Categoria[]>;

  constructor(){

  }
  
  // ngOnInit -> executa apenas uma vez quando o componente é iniciado
  // ngOnChanges -> executa na criação e toda vez que um bind é alterado
  // ngOnViewInit -> roda antes do OnInit quando os componetes de tela é montado
  // ngAfterViewInit -> roda depois do ngOnInit quando toda a tela ja esta disponivel no browser
  // ngOnDestroy -> executado quando o seu componente é removido do DOM

  ngOnInit(): void {
    
  }

  salvarEntrada(){

  }
  
}
