import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getIPAddress(){
    return this.http.get<{ip:string}>('https://api.ipify.org/?format=json')
  }

  getProducts(){
    return this.http.get<Product[]>(environment.apiEndpoint + `products`)
  }

  getProduct(id){
    return this.http.get<Product>(environment.apiEndpoint + `products/${id}`)
  }

  getPayment(id){
    return this.http.get<any>(environment.apiEndpoint + `payments/${id}`)
  }

  sendCardInfo(card) {
    return this.http.post<any>(environment.apiEndpoint + 'card', card)
  }

  sendCustomerInfo(customer) {
    return this.http.post<any>(environment.apiEndpoint + 'customer', customer)
  }

  sendCardPayment(payment){
    return this.http.post<any>(environment.apiEndpoint + 'payments/card', payment)
  }


}
