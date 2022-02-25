import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCComponent } from './edit-c.component';

const routes: Routes = [{ path: '', component: EditCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCRoutingModule { }
