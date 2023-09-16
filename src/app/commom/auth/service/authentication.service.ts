import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/base/http-base.service';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends HttpBaseService {

  // subjects
  // bahaviorSubjects

  private subjectUsuario: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjectLogin: BehaviorSubject<any> = new BehaviorSubject(false);
  

  constructor(protected override readonly injector: Injector) {
    super(injector)
   }


   login(login: Login): Observable<any>{

      return this.httpPost('authentication', login).pipe(
        map((resposta) => {

          sessionStorage.setItem('token', resposta.token);
          this.subjectUsuario.next(resposta.user);
          this.subjectLogin.next(true);
          return resposta.user;
        }),
      )

   }

   sair(){
    sessionStorage.removeItem('token');
    this.subjectUsuario.next(null);
    this.subjectLogin.next(false);
    
   }

   usuarioEstaLogado(): Observable<any>{

    const token = sessionStorage.getItem('token');

    if(token) {
      this.subjectLogin.next(true);
    }

    return this.subjectLogin.asObservable();
      
    }

  obterUsuario(){
    this.subjectUsuario.asObservable();
  }  
}
