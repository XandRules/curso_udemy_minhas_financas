import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {MockBuilder, MockInstance, MockModule, MockProvider, MockRender} from 'ng-mocks';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../../service/dashboard.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardModule } from '../../dashboard.module';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: DashboardService;
  let entradas = [
    {
      "nome": "Aluguel",
      "categoriaId": 1,
      "data": "17-06-2023",
      "pago": false,
      "tipo": "despesa",
      "valor": "1490",
      "id": 1
    },
    {
      "nome": "Video game",
      "categoriaId": 3,
      "data": "17-04-2023",
      "pago": true,
      "tipo": "despesa",
      "valor": "345",
      "id": 2
    },
    {
      "nome": "Salario",
      "categoriaId": 4,
      "data": "17-04-2023",
      "pago": true,
      "tipo": "receita",
      "valor": "3000",
      "id": 3
    },
    {
      "nome": "Gas de cozinha",
      "categoriaId": 1,
      "data": "17-04-2023",
      "pago": true,
      "tipo": "despesa",
      "valor": "90",
      "id": 4
    },
    {
      "nome": "Reforma",
      "categoriaId": 1,
      "data": "24-04-2023",
      "pago": true,
      "tipo": "despesa",
      "valor": 789,
      "id": 5
    }
  ];

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers:[
        FormBuilder,
        MockProvider(DashboardService, {
          getEntradas: () => of(entradas)
        }),
      ],
      imports:[
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

    service = TestBed.inject(DashboardService);
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

  it('deve buscar os dados de entrada', () => {
    component.getEntradas();

    expect(component.entradas).toEqual(entradas)

  });
});
