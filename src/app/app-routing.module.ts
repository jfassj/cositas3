import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './view/heroes/form/form.component';
import { TableComponent } from './view/heroes/table/table.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
