import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  constructor(private authenticationService: AuthenticationService,
    private router: Router){

  }

  ngOnInit(): void {
    
  }


  login(){

  }

  logout(){

  }

  // Guardas de Rotas

  // CanActivate  CanLoad

  // CanDeactivate -> casdastro

  // Interceptors -> users -> token -> 


}
