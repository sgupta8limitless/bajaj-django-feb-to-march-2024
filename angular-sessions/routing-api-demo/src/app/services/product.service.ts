import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<any>
  {
    return this.httpClient.get("http://localhost:3000/products")
  
  }

  getProduct(id:String):Observable<any>
  {
    return this.httpClient.get(`http://localhost:3000/products/${id}`)
  }

  createProduct(product:any):Observable<any>
  {
    return this.httpClient.post("http://localhost:3000/products",product);
  }

  deleteProduct(id:String):Observable<any>
  {
    return this.httpClient.delete(`http://localhost:3000/products/${id}`);
  }

  updateProduct(id:String,product:any):Observable<any>
  {
    return this.httpClient.put(`http://localhost:3000/products/${id}`,product);
  }



}
