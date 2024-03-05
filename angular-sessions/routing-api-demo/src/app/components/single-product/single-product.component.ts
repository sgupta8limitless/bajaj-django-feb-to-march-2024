import { Component, Input } from '@angular/core';
import Product from '../../types/Product';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})


export class SingleProductComponent {

  @Input() product:Product={};

  

}
