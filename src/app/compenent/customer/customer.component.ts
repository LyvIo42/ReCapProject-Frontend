import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/customers';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customers[]=[];
  constructor(private customerService:CustomerService){}
  
  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
      // this.dataLoaded=true;
    })
  }
}