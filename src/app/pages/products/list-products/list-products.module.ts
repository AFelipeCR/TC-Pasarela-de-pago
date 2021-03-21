import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';


@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    ListProductsRoutingModule,
    HttpClientModule
  ],
  providers:[ApiService]
})
export class ListProductsModule { }
