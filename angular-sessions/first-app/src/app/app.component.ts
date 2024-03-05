import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FormsModule,ProductComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name="Harsh"
  url="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg"


  doSomething(ev:Event){
    
    this.name="Nikhil";
    // this.url = "https://preview.redd.it/njeybdh9h4k71.jpg?auto=webp&s=1eb8a90ce152c076825277b40ee63dac900ba4e1"
    
    console.log(ev.target);

  }


  getValue(ev:Event)
  {

      let ele = ev.target as HTMLInputElement;
      this.name = ele.value;
      
  }


}
