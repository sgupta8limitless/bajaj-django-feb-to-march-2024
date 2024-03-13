import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent  {

val = "hello"

doSomething()
{
  this.val="login succes";
}

}
