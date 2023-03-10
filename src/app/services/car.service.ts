
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/carDetail';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn:'root'
})
export class CarService {
  

  apiUrl = 'https://localhost:44363/api/';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)

  }
  getCarByColor(colorId:number){
    let newPath = this.apiUrl+"cars/getalldetailbycolorid/?colorid="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
 

  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getallbydetailbrandid/?brandid="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getallbycarid?carid=" + carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColorAndBrand(brandId:number, colorId:number){
    let newUrl = this.apiUrl + 
    "cars/getcardetailsbycolorandbrand?brandId=" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }
}