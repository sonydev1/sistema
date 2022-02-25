import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCRoutingModule } from './edit-c-routing.module';
import { EditCComponent } from './edit-c.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditCComponent
  ],
  imports: [
    CommonModule,
    EditCRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditCModule { }
