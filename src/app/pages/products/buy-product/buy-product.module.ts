import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuyProductRoutingModule } from './buy-product-routing.module';
import { BuyProductComponent } from './buy-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';


@NgModule({
  declarations: [BuyProductComponent],
  imports: [
    CommonModule,
    BuyProductRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ApiService]
})
export class BuyProductModule { }
