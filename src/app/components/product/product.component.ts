import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { item } from 'src/app/Models/item.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:item[]=[]
 constructor(private productService:ProductService,private http:HttpClient){
 }
 ngOnInit(){
  this.productService.getAllItem().subscribe((res:item[])=>{
    this.products=res
  })
   

   
 }
}
