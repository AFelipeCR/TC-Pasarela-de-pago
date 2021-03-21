import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
  product:Product;
  customer;
  quantity:number;
  formCustomer:FormGroup;
  formCard:FormGroup;
  isRequesting:boolean;

  constructor(
    private api:ApiService, 
    private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {
    this.isRequesting = false;
    this.quantity = this.activatedRoute.snapshot.params.QN;
    this.api.getProduct(this.activatedRoute.snapshot.params.ID)
    .subscribe(product => {
      this.product = product
    })
  }

  ngOnInit(): void {
    this.formCard = this.fb.group({
      number: ['4575623182290326', Validators.required],
	    exp_year:['2025', Validators.required],
	    exp_month:['12', Validators.required],
	    cvc:['123', Validators.required]
    })

    this.formCustomer = this.fb.group({
      doc_type: ["CC"],
	    doc_number: ["1052411460"],
	    name: ["Andrés Felipe"],
	    last_name: ["Chaparro Rosas"],
	    email: ["andres.chaparro06@uptc.edu.co"],
	    phone: ["3123871293"],
	    cell_phone: ["3123871293"],
	    city: ["Tunja"],
	    address: ["Cl 32 No. 12 -53"],
    })
  }

  keepCustomer(){
    if(this.formCustomer.valid){
      this.isRequesting = true;
      this.customer = this.formCustomer.value;
      
      this.api.getIPAddress().subscribe(res =>  {
        this.customer.ip = res.ip
        this.isRequesting = false;
      })
    }else console.log("Fallo")
  }

  trySendCardInfo(){
    if(this.formCard.valid){
      this.isRequesting = true;
      
      this.api.sendCardInfo(this.formCard.value).subscribe(token => {
        if(token.status){
          this.customer.token_card = token.data.id
          this.customer.default = true;
          this.customer.cell_phone = this.customer.phone;

          this.api.sendCustomerInfo(this.customer).subscribe(customer => {
            this.customer.customer_id = customer.data.customerId;
            this.customer.value = this.product.unitPrice * this.quantity
            this.isRequesting = false;
          })
        }else{

        }
      })
    }else
      console.log("Fallo")
  }

  tryPay(){
    if(this.customer.token_card){
      this.isRequesting = true;
      let data = this.customer;
      data.description= this.product.name + ' ' + this.quantity + ' unidades';
      delete data.default;

      this.api.sendCardPayment(this.customer).subscribe(charge =>{
        if(charge.status){
          if(charge.success){
            this.isRequesting = false;
            this.router.navigate(['/payments/bill', charge.data.ref_payco])
          }
        }else
          console.log(charge)
      })
    }
  }
}
