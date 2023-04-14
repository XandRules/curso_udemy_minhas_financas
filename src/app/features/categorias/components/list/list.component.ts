import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaService } from '../../service/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = [ 'nome', 'descricao', 'editar', 'excluir'];
  dataSource = new MatTableDataSource<Categoria>();
  categorias: Categoria[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoriaService: CategoriaService,
    private router: Router){

  }
  ngOnInit(): void {
    this.buscarCategorias();
  }

  buscarCategorias() {
    this.categoriaService.getCategorias()
    .subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
      this.dataSource.data = this.categorias;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  chamarEdicao(categoria: Categoria){
    this.router.navigate(['categorias', 'editar', categoria.id]);
  }

  excluir(id: number){
    this.categoriaService.excluirCategoria(id)
    .subscribe(resposta => {
      this.buscarCategorias();
    })
  }

  novaCategoria(){
    this.router.navigate(['categorias','nova-categoria'])
  }

}
