import { Component } from '@angular/core';
import { SingleProductComponent } from '../../components/single-product/single-product.component';
import Product from '../../types/Product';
import { ProductService } from '../../services/product.service';
import {  HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SingleProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:Product[] = [];

  constructor(private productService:ProductService){}

  ngOnInit() {

    this.productService.getProducts().subscribe((data)=>{
      console.log(data);
      this.products=data;
    })
      
  }



}
