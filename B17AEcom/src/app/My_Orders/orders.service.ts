import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http:HttpClient) {  }

  getMyOrder(){
    let url="/assets/data/order.json";
    return this.http.get(url)
  }

  
}
