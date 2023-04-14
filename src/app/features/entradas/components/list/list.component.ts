import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Entrada } from '../../models/entrada.model';
import { MatPaginator } from '@angular/material/paginator';
import { EntradasService } from '../../service/entradas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {


  displayedColumns: string[] = [ 'nome', 'pago', 'data', 'valor', 'tipo', 'editar', 'excluir'];

  dataSource = new MatTableDataSource<Entrada>();
  entradas: Entrada[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private entradaService: EntradasService,
    private router: Router){

  }
  ngOnInit(): void {
    this.buscarEntradas();
  }

  buscarEntradas(){
    this.entradaService.getEntradas()
    .subscribe((entradas: Entrada[]) => {
      this.entradas = entradas;
      this.dataSource.data = this.entradas;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  chamarEdicao(entrada: Entrada){
    this.router.navigate(['entradas', 'editar', entrada.id]);
  }

  excluir(id: number){
    this.entradaService.excluirEntrada(id)
    .subscribe(resposta => {
      this.buscarEntradas();
    })
  }

  novaEntrada(){
    this.router.navigate(['entradas','novo'])
  }


}
