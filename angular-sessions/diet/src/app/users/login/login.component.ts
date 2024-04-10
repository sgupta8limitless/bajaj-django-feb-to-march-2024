import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private userService:UserService){}

  email = new FormControl("",[])
  password = new FormControl("",[])

  loginForm = new FormGroup({
    email:this.email,
    password:this.password
  })

  login()
  {
    this.userService.login(this.loginForm.value).subscribe((response:any)=>{
      console.log(response)
      sessionStorage.setItem("dietToken",response.token)
    })
  }

}
