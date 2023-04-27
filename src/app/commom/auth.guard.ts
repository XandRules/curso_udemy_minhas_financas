import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth/service/authentication.service';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      const url = state.url;

      return this.authenticationService.usuarioEstaLogado()
      .pipe(
        tap((estaLogado) => {
          if(!estaLogado){
            this.router.navigateByUrl('/auth/login');
            return false;
          }else{
            return true;
          }
        })
      )
  }
  
}
