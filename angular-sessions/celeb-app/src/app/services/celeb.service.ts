import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelebService {

  constructor(private httpClient:HttpClient) { }

  getCelebsByName(name:String):Observable<any>
  {

    const headersObj = {
      "x-api-key":"WoHL28IXs1KKUlPkN4njmg==wtmkuWGAwqUPYIKE"
    }

    return this.httpClient.get(`https://api.api-ninjas.com/v1/celebrity?name=${name}`,{headers:headersObj})


  }

}
