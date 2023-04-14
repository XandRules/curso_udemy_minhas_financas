import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  private readonly httpClient!: HttpClient;

  private apiBase = 'http://localhost:3000/';

  constructor(protected readonly injector: Injector) { 
    if(injector == null || injector == undefined){
      throw new Error('Injector não pode ser nulo');
    }

    this.httpClient = injector.get(HttpClient);
  }

  protected httpGet(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.apiBase}${endpoint}`);
  }

  protected httpPost(endpoint: string, dados: any): Observable<any> {
    return this.httpClient.post(`${this.apiBase}${endpoint}`, dados);
  }

  protected httpPut(endpoint: string, dados:any): Observable<any> {
    return this.httpClient.put(`${this.apiBase}${endpoint}`, dados);
  }

  protected httpDelete(endpoint: string): Observable<any> {
    return this.httpClient.delete(`${this.apiBase}${endpoint}`);
  }



  // Tratamento erro e excessão 


}
