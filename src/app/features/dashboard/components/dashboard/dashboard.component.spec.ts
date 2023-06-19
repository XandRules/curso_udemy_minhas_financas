import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {MockBuilder, MockModule, MockProvider} from 'ng-mocks';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DashboardService } from '../../service/dashboard.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DashboardModule } from '../../dashboard.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let httpServiceBaseStub;

  beforeEach(async () => {

    MockBuilder(DashboardComponent).keep(ReactiveFormsModule);

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers:[
        FormBuilder,
        MockProvider(DashboardService),
      ],
      imports:[
        MockModule(ReactiveFormsModule),
        MockModule(MaterialModule)
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
});
