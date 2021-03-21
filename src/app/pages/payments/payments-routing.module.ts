import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';

const routes: Routes = [
  { path: 'bill/:ID', loadChildren: () => import('./bill/bill.module').then(m => m.BillModule) },
  { path: ':ID/:QN', loadChildren: () => import('./process/process.module').then(m => m.ProcessModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
