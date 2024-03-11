import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import Product from '../../../types/Product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {

  constructor(private productService:ProductService){}
  products:Product[] = []

  ngOnInit(): void {
    
    this.productService.getProducts()
    .subscribe((products)=>{
      this.products=products;
      console.log(products);
    })
    
  }

  deleteProduct(id:any)
  { 

    this.productService.deleteProduct(id)
    .subscribe((data)=>{

      let index = this.products.findIndex((pro)=>{
        return pro._id === id
      })

      this.products.splice(index,1);

    })
  }


}
