import { Component } from '@angular/core';
import { FoodsService } from '../../foods.service';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {


  constructor(private foodService:FoodsService){}

  ngOnInit(): void {
    
    this.foodService.getFoodItems().subscribe((data)=>{
      console.log(data)
    })
    
  }


}
