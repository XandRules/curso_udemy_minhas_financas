import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/features/categorias/models/categoria.model';
import { CategoriaService } from 'src/app/features/categorias/service/categoria.service';
import { EntradasService } from '../../service/entradas.service';
import * as dayjs from 'dayjs'
import { Entrada } from '../../models/entrada.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{
  
  tiposDeEntradas = [
    'Receita',
    'Despesa'
  ];
  
  statusDePagamento = [
    {value: true, descricao: 'Pago'},
    {value: false, descricao: 'Pendente'}
  ];
  
  categorias: Categoria[] = [];
  formEntradas!: FormGroup;

  constructor(private readonly categoriaService: CategoriaService,
    private readonly entradaService: EntradasService,
    private formBuilder: FormBuilder){

  }
  
  ngOnInit(): void {
    this.criarFormulario();
    this.buscarCategorias();
  }

  buscarCategorias() {
    this.categoriaService.getCategorias()
    .subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  criarFormulario(){
    this.formEntradas = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      categoriaId: ['', Validators.required],
      pago: [true, Validators.required],
      tipo: ['Despesa', Validators.required],
      data: [new Date(), Validators.required],
    });
  }

  salvarEntrada(){

    const data = dayjs(this.formEntradas.controls['data'].value).format('DD/MM/YYYY');

    const payloadRequest: Entrada = Object.assign('', this.formEntradas.getRawValue());

    payloadRequest.data = data;

    const payload: Entrada = {
      nome: payloadRequest.nome,
      categoriaId: payloadRequest.categoriaId,
      data: payloadRequest.data,
      pago: payloadRequest.pago,
      tipo: payloadRequest.tipo,
      valor: payloadRequest.valor
    }
    

    this.entradaService.criarEntrada(payload)
    .subscribe(resposta => {
      console.log('OK')
    });
  }
  
}
