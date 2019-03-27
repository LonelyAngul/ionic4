import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpMethod } from '../../enums/http-method/http-method.enum';
import { HTTP } from "@ionic-native/http/ngx";
import { WEB_SERVE_URL } from "./contants";

const headers = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Methods':'POST,GET,OPTIONS,DELETE'
});

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(
    public http: HttpClient
  ) { }

  public httpRequest(url: string, data?: any, httpMethod?: HttpMethod) {
    if (httpMethod === HttpMethod.GET) {
      return this.get(url, data, headers);
    } else if (httpMethod === HttpMethod.POST) {
      return this.post(url, data, headers);
    } else if (httpMethod === HttpMethod.PUT) {
      return this.put(url, data, headers);
    } else {
      return this.delete(url, data, headers);
    }
  }

  public get(url: string, data?: any, headers?: any) {
    return this.http.get(url + this.toBodyString(data), { headers });
  }

  public post(url: string, data?: any, headers?: any) {
    return this.http.post(url, this.toBodyString(data), { headers });
  }

  public put(url: string, data?: Object, headers?: any) {
    return this.http.put(url, this.toBodyString(data), { headers });
  }

  public delete(url: string, data?: any, headers?: any) {
    return this.http.delete(url + this.toBodyString(data), { headers });
  }

  /**
   *
   * @param obj
   * @return {string}
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
   */
  private toBodyString(obj) {
    let ret = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    return ret.join('&');
  }

  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }


}
