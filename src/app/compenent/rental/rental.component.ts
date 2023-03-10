import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentals:Rentals[]=[];
  constructor(private rentalService:RentalService){
  
  }
  
  ngOnInit(): void {
    this.getRentals();
  }
  getRentals() {
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
      // this.dataLoaded=true;
    })
  }
}