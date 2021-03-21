import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { ApiService } from '../../../services/api.service';


@NgModule({
  declarations: [BillComponent],
  imports: [
    CommonModule,
    BillRoutingModule,
    HttpClientModule
  ],
  providers:[ApiService]
})
export class BillModule { }
