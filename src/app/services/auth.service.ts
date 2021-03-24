import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModule } from '../models/loginModule';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModule } from '../models/tokenModule';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44367/api/auth/";
  

  constructor(private httpClient:HttpClient) { }

  login(loginModule:LoginModule):Observable<SingleResponseModel<TokenModule>>{
    return this.httpClient.post<SingleResponseModel<TokenModule>>(this.apiUrl+"login",loginModule);

  }

  isAuthenticated(){
    if (localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
