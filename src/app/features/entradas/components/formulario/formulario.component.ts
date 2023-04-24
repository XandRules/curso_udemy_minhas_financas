import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/features/categorias/models/categoria.model';
import { CategoriaService } from 'src/app/features/categorias/service/categoria.service';
import { EntradasService } from '../../service/entradas.service';
import * as dayjs from 'dayjs'
import { Entrada } from '../../models/entrada.model';
import { ActivatedRoute, Router } from '@angular/router';

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
  
  statusDePagamento = [
    {value: true, descricao: 'Pago'},
    {value: false, descricao: 'Pendente'}
  ];
  
  categorias: Categoria[] = [];
  formEntradas!: FormGroup;
  rota: string = '';
  id: string = '';
  entrada!: Entrada;
  estaCriando: boolean = false;

  categorias$ = this.categoriaService.getCategorias();

  constructor(private readonly categoriaService: CategoriaService,
    private readonly entradaService: EntradasService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute){

  }
  
  ngOnInit(): void {
    this.criarFormulario();

    this.rota = this.activatedRouter.snapshot.url[0].path;

    if(this.rota === 'editar'){
      this.id = this.activatedRouter.snapshot.url[1].path;

      this.buscarEntradaPeloId();
    }
    else {
      this.estaCriando = true;
    }


  }

  buscarEntradaPeloId(){
    this.entradaService.getEntradasPeloId(+this.id)
    .subscribe((entrada: Entrada) => {
      this.entrada = entrada;

      const data = this.entrada.data.split('-');

      this.formEntradas.controls['nome'].setValue(this.entrada.nome);
      this.formEntradas.controls['valor'].setValue(this.entrada.valor);
      this.formEntradas.controls['categoriaId'].setValue(this.entrada.categoriaId);
      this.formEntradas.controls['pago'].setValue(this.entrada.pago);
      this.formEntradas.controls['tipo'].setValue(this.entrada.tipo);
      this.formEntradas.controls['data'].setValue(new Date(+data[2], +data[1] -1, +data[0]));


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

    console.log(this.formEntradas.controls['data'].value);
    

    const data = dayjs(this.formEntradas.controls['data'].value).format('DD-MM-YYYY');

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
    
    if(this.estaCriando){
      this.criarNovaEntrada(payload)
    }

    else{
      payload.id = this.entrada.id;
      this.editarEntrada(payload);
    }

    
  }

  criarNovaEntrada(payload: Entrada){
    this.entradaService.criarEntrada(payload)
    .subscribe(resposta => {
      console.log('OK')
      this.redirecionar();
    });
  }

  editarEntrada(payload: Entrada) {
    this.entradaService.editarEntrada(payload)
    .subscribe(resposta => {
      console.log('OK')
      this.redirecionar();
    });
  }

  redirecionar(){
    this.router.navigate(['entradas']);
  }

  
}
