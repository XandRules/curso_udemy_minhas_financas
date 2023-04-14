import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';

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

   excluirEntrada(id: number): Observable<any> {
    return this.httpDelete(`${this.endpoint}/${id}`)
   }
}
