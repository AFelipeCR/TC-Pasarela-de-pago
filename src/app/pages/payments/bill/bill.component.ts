import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  payment;

  constructor(private api:ApiService, private activatedRoute:ActivatedRoute) {
    console.log(activatedRoute.snapshot.params.ID)
    this.api.getPayment(activatedRoute.snapshot.params.ID)
    .subscribe(payment => console.log(this.payment = payment.data))
  }

  ngOnInit(): void {
  }

}
