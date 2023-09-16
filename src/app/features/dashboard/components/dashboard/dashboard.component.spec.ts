import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {MockBuilder, MockInstance, MockModule, MockProvider, MockRender} from 'ng-mocks';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../../service/dashboard.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { of } from 'rxjs';
import { entradasMock } from 'src/app/shared/mocks/entradas.mock';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers:[
        FormBuilder,
        MockProvider(DashboardService, {
          getEntradas: () => of(entradasMock)
        }),
      ],
      imports: [
        MockModule(ReactiveFormsModule),
        MockModule(MaterialModule),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.meses = [];
    component.formDashboard = new FormGroup({
    });
    component.criarFormulario();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve atualizar o saldo', () => {
    component.despesa = 1000;
    component.receita = 5000;

    component.getSaldo();

    expect(component.saldo).toEqual(4000);

  });

  it('deve buscar as entradas para o dashboard',() => {
    component.getEntradas();

    expect(component.entradas).toEqual(entradasMock)
  });

});
