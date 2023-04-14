import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { ListComponent } from './components/list/list.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusPipe } from './pipes/status.pipe';


@NgModule({
  declarations: [
    ListComponent,
    FormularioComponent,
    StatusPipe,
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class EntradasModule { }
