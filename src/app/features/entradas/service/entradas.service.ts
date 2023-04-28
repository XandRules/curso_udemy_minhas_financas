import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { Entrada } from '../models/entrada.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntradasService extends HttpBaseService{

  private endpoint = 'entradas';

  constructor(protected override readonly injector: Injector) {
    super(injector);
   }

   getEntradas(): Observable<any>{

    return this.httpGet(`${this.endpoint}`);

   }

   getEntradasPeloId(id: number): Observable<any>{

    return this.httpGet(`${this.endpoint}/${id}`);

   }

   excluirEntrada(id: number): Observable<any> {
    return this.httpDelete(`${this.endpoint}/${id}`)
   }

   criarEntrada(payload: Entrada): Observable<any>{
    return this.httpPost(`${this.endpoint}`, payload);
   }
 
   editarEntrada(payload: Entrada): Observable<any>{
    return this.httpPut(`${this.endpoint}/${payload.id}`, payload);
   }
}
