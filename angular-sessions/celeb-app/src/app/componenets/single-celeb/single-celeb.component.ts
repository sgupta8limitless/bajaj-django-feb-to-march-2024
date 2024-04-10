import { Component, Input } from '@angular/core';
import Celeb from '../../types/Celeb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-celeb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-celeb.component.html',
  styleUrl: './single-celeb.component.css'
})
export class SingleCelebComponent {

  @Input() celeb:Celeb = {}

}
