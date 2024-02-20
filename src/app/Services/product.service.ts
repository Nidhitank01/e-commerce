import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { item } from '../Models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProduct:item[]=[]
  constructor(private http:HttpClient) {
    this.getAllItem()
  }
  getAllItem(){
   return this.http.get('http://localhost:3000/AllItem')
    
  }
}
