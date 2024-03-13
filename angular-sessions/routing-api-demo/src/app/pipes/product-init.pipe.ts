import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productInit',
  standalone: true
})
export class ProductInitPipe implements PipeTransform {

  transform(value: string | undefined,category:string | undefined): string {


    if(category?.toUpperCase()==="CLOTHING")
    {
      return "C - "+value;
    }
    else if(category?.toUpperCase()==="ELECTRONICS")
    {
      return "E - "+value
    }
    else 
    {
      return "G - "+value
    }

    
  }

}


