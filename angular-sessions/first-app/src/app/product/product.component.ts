import { Component, Input } from '@angular/core';


function addP(value:string)
{
  return "P-"+value;
}

function minus10(value:number)
{
  return (value-10);
}


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {

  @Input({alias:"proName",transform:addP}) name:string="";
  @Input({transform:minus10}) price:number=0


}

