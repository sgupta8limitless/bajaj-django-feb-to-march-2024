import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchname:String=""

  constructor(private router:Router){}

  loadCelebs()
  {
    this.router.navigate(["/celebs/"+this.searchname])
  }


}
