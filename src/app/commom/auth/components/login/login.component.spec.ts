import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { MaterialModule } from 'src/app/shared/material/material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const email = fixture.nativeElement.querySelector('email');
    const password = fixture.nativeElement.querySelector('password');


    expect(button.disabled).toBe(true);

  });

  it('should be enable button', () => {

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const email: HTMLInputElement = fixture.nativeElement.querySelector('#email');
    const password: HTMLInputElement = fixture.nativeElement.querySelector('#password');

    fixture.detectChanges();
    email.value = 'alexandre@email.com';
    password.value = '1234';

    fixture.detectChanges();

    expect(password.value).toBe('1234');
    expect(email.value).toBe('alexandre@email.com');

    expect(component.loginForm.invalid).toBe(false);

  });



});
