import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {


  private apiBase = 'http://localhost:3000/'; // caminho para a api

  constructor() {}

}
