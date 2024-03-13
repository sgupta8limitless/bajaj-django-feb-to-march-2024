import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import Product from '../../../types/Product';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductInitPipe } from '../../../pipes/product-init.pipe';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule,ProductInitPipe],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {

  constructor(private productService:ProductService){}
  products:Product[] = []
  filteredProducts:Product[]=[]

  name = "";


  searchByName()
  {

    console.log(this.name)

    this.filteredProducts =  this.products.filter((prod)=>{
      return prod.name?.toUpperCase().includes(this.name.toUpperCase());
    })
  }

  ngOnInit(): void {
    
    this.productService.getProducts()
    .subscribe((products)=>{
      this.products=products;
      this.filteredProducts=products;
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


