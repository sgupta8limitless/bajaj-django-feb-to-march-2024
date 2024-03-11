import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    
    console.log(this.activatedRoute.snapshot.params["id"]);
    
  }

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



}
