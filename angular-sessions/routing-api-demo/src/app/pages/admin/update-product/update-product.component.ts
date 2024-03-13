import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';



@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router
    ){}
 

  ngOnInit(): void {
    
    // console.log(this.activatedRoute.snapshot.params["id"]);

    this.productService.getProduct(this.activatedRoute.snapshot.params["id"])
    .subscribe((product)=>{
      console.log(product)
      
      this.name.setValue(product.name);
      this.price.setValue(product.price);
      this.imageUrl.setValue(product.imageUrl);
      this.category.setValue(product.category);

    })

    
  }

  name = new FormControl("",[
    Validators.required,
    Validators.minLength(5)
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


  update()
  {
    console.log(this.name);

    

    if(this.productForm.valid===true)
    {
       this.productService.updateProduct(
        this.activatedRoute.snapshot.params["id"],
        this.productForm.value)
        .subscribe((data)=>{

            this.router.navigate(["/admin/products"]);

        })
    }
  

   

  }



}
