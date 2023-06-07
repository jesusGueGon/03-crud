import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './pages/crud/crud.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TableComponent } from './components/table/table.component';
import { RouterModule } from '@angular/router';
import { CrudRoutingModule } from './crud-routing.module';

@NgModule({
  declarations: [
    CrudComponent,
    FormComponentComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrudRoutingModule
  ],
  exports: [
    CrudComponent
  ]
})
export class CrudModule { }
