import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  login(userCred:any){

    return this.httpClient.post("http://127.0.0.1:8000/api/v1/users/login/",userCred)

  }

}
