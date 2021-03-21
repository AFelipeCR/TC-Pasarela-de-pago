import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { ApiService } from '../../..//services/api.service';


@NgModule({
  declarations: [ProcessComponent],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ApiService]
})
export class ProcessModule { }
