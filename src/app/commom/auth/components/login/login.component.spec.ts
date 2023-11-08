import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '../../service/authentication.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationServiceStub: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: AuthenticationService,
          useValue: { login: () => (of({user: { id: 1, name: 'Alexandre'}}))}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should be validate a form disable button', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBe(true);

  });

  it('should be button click and call login Service', () => {

    component.loginForm.controls['email'].setValue('test@test.com');
    component.loginForm.controls['password'].setValue('12345');

    authenticationServiceStub = TestBed.get(AuthenticationService);

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const email: HTMLInputElement = fixture.nativeElement.querySelector('#email');
    const password: HTMLInputElement = fixture.nativeElement.querySelector('#password');

    fixture.detectChanges();
    email.value = 'alexandre@email.com';
    password.value = '1';

    const spy = jest.spyOn(authenticationServiceStub, 'login');

    fixture.detectChanges();

    button.click();

    expect(spy).toHaveBeenCalled();

  });

  it('should be button click and call login Service', () => {

    component.loginForm.controls['email'].setValue('test@test.com');
    component.loginForm.controls['password'].setValue('12345');

    authenticationServiceStub = TestBed.get(AuthenticationService);

    const spy = jest.spyOn(authenticationServiceStub, 'login');

    fixture.detectChanges();

    component.login();

    expect(spy).toHaveBeenCalled();

  });

});
