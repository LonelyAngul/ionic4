import { Injectable } from '@angular/core';
import { HttpService } from "../http-service/http.service";
import { HttpMethod } from "../../enums/http-method/http-method.enum";
import * as home from "../home-service/home-modal";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    public httpserve:HttpService
  ) { }

  HomeLoading(data:home.HomeParams){
    return this.httpserve.httpRequest(`/api/depot/listDepot?depotStatus=${data.depotStatus}&pageIndex=${data.pageIndex}&pageSize=${data.pageSize}`,{},HttpMethod.POST);
  }
}
