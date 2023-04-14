import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'nova-categoria', component: FormularioComponent},
  {path: 'editar/:id', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
