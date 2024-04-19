import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { Entrada } from '../models/entrada.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  private endpoint = 'entradas';

  constructor() {
   
   }


}
