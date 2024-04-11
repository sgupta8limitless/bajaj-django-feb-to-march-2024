import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  token=null

  constructor(private httpClient:HttpClient) { 

    let loggedData = sessionStorage.getItem("dietToken")

    if(loggedData!=null)
      {
        this.token = JSON.parse(loggedData).token
      }
    

  }

  

  getFoodItems()
  {
    let headers = new HttpHeaders()
    .set("Authorization",`Bearer ${this.token}`)
  
    
    return this.httpClient.get("http://127.0.0.1:8000/api/v1/users/getfoods/",{headers:headers})
  }

}
