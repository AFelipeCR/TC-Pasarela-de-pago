import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
	products:Product[];

	constructor(private api:ApiService) {
		this.api.getProducts()
		.subscribe(products => this.products = products)
	}
	ngOnInit(): void {
	}
}
