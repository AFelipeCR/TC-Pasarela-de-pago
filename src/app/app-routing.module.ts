import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{path: '**', redirectTo: ''},
	{ path: '', redirectTo: 'products', pathMatch: 'full'},
	{ path: 'payments', loadChildren: () => import('./pages/payments/payments.module').then(m => m.PaymentsModule) },
	{ path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) }, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
