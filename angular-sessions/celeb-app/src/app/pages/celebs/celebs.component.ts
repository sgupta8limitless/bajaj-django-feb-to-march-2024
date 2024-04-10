import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelebService } from '../../services/celeb.service';
import Celeb from '../../types/Celeb';
import { CommonModule } from '@angular/common';
import { SingleCelebComponent } from '../../componenets/single-celeb/single-celeb.component';

@Component({
  selector: 'app-celebs',
  standalone: true,
  imports: [CommonModule,SingleCelebComponent],
  templateUrl: './celebs.component.html',
  styleUrl: './celebs.component.css'
})
export class CelebsComponent {

  celebs:Celeb[] = []

  constructor(private activatedRoute:ActivatedRoute,private celebService:CelebService){}

  ngOnInit(): void {
    
    let name = this.activatedRoute.snapshot.params["name"]
   
    this.celebService.getCelebsByName(name).subscribe((data)=>{

      this.celebs = data;

      console.log(data)

    })

    
  }

}
