import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 users = ["Rahul","Sharif","Shobha","Khushboo","Nikhil"]

 avengers = [
  {id:1,name:"Thor",age:1500,planet:"asgard"},
  {id:2,name:"Thanos",age:150,planet:"titan"},
  {id:3,name:"Collector",age:5000,planet:"knowhere"}
 ]


}
