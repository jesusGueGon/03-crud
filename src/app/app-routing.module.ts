import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/pages/crud/crud.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then(resp => resp.CrudModule)
  },
  {
    path: '**',
    redirectTo: 'crud'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
