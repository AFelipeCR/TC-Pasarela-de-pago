import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../..//models/product';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  product:Product;
  form:FormGroup;

  constructor(
    private api:ApiService, 
    private activatedRoute:ActivatedRoute, 
    private fb:FormBuilder,
    private route:Router
  ) {
    this.api.getProduct(this.activatedRoute.snapshot.params.ID)
    .subscribe(product => {
      this.product = product
      this.form.get('quantity').setValidators([Validators.required, Validators.min(1), Validators.max(this.product.units)])
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      quantity: [1]
    })
  }

  onSubmit(){
    if(this.form.valid)
      this.route.navigate(['/payments', this.product.id, this.form.value.quantity])

  }
}
