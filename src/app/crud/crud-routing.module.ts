import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './pages/crud/crud.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CrudComponent
      },
      {
        path: 'edit/:id',
        component: CrudComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
