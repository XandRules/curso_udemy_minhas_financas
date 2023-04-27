import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../models/login';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  loginForm!: FormGroup; 
  authLogin!: Login;


  constructor(private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }


  login(){

    this.authLogin = Object.assign('',this.authLogin, this.loginForm.value);

    this.authLogin.email = this.authLogin.email.toLowerCase();

    console.log(this.authLogin)

    this.authenticationService.login({email: this.authLogin.email, password: this.authLogin.password})
    .subscribe((user) => {
      if(user?.id){
        this.router.navigateByUrl('dashboard');
      }
    },(error) => {
        this._snackBar.open('Ocorreu um erro no Login!');
    }
    );

  }

  sair(){
    this.authenticationService.sair();
    this.router.navigate(['auth', 'login']);
  }


}
