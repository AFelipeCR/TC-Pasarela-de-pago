import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'buy/:ID', loadChildren: () => import('./buy-product/buy-product.module').then(m => m.BuyProductModule) },
  { path: '', loadChildren: () => import('./list-products/list-products.module').then(m => m.ListProductsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
