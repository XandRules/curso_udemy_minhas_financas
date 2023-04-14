import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends HttpBaseService{

  private endpoint = 'categorias';

  constructor(protected override readonly injector: Injector) { 
    super(injector)
  }


  getCategorias(): Observable<any>{
    return this.httpGet(this.endpoint);
  }

  getCategoriasPeloId(id: number): Observable<any>{
    return this.httpGet(`${this.endpoint}/${id}`);
  }

  alterarCategoria(payload: Categoria): Observable<any> {
    return this.httpPut(`${this.endpoint}/${payload.id}`, payload)
  }

  excluirCategoria(id: number): Observable<any> {
    return this.httpDelete(`${this.endpoint}/${id}`);
  }

  criarCategoria(payload: Categoria): Observable<any> {
    return this.httpPost(`${this.endpoint}`, payload)
  }

}
