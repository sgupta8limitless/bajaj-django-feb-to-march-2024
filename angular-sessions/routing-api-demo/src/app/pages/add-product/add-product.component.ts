import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private productService:ProductService){}

  name = new FormControl("",[
    Validators.required,
    Validators.minLength(10)
  ])

  price = new FormControl("",[
    Validators.required,
    Validators.min(1)
  ])

  imageUrl = new FormControl("",[
    Validators.required
  ])

  category = new FormControl("",[
    Validators.required
  ])

  productForm = new FormGroup({
    name:this.name,
    price:this.price,
    imageUrl:this.imageUrl,
    category:this.category
  })

  createProduct()
  {
    
      this.productService.createProduct(this.productForm.value).subscribe((data)=>{
        console.log(data);
        this.productForm.reset()
      })
    
  }





 

  

}
