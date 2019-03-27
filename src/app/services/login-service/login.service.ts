import { Injectable } from '@angular/core';
import { HttpService } from "../http-service/http.service";
import { HttpMethod } from "../../enums/http-method/http-method.enum";
import * as type from "./login-modal";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpserve:HttpService
  ) { }

  //登录接口
  Logins(params:type.loginParams){
     //return this.httpserve.httpRequest(`/user/userLogin?code=${params.code}&password=${params.password}`,{},HttpMethod.POST);
    return this.httpserve.httpRequest(`http://183.62.43.106:20015/api/stockSharedCoreService/CcTest?str=123`,{},HttpMethod.POST)
  }
}
