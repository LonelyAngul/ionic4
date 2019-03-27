import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../../services/login-service/login.service";
import { ToasAlert } from "../../until/toas-alert";

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public IsRremoveStore : boolean = false;
  public username:string = '';
  public password:string = '';

  constructor(
    public router: Router,
    public dologin:LoginService,
    public until:ToasAlert,
    public http:HttpClient
  ) { }

  ngOnInit() {
  }

  login() {
    this.until.ShowLoading('正在登录',2000);
    let data = {
      isrremovestore: this.IsRremoveStore,
      code:this.username,
      password: this.password
    };
    this.dologin.Logins(data).subscribe((result:Response|any)=>{
      console.log(result);
      alert('ok')
      this.router.navigate(['/LoginTabs']);
    },err=>{
      console.log(err);
      // this.until.errorToast(err.message);
      this.until.presentAlert(err.message,'错误')
    });

 
    // 储存用户信息
    // this.storage.remove("UserInfo");
    // this.router.navigate(['/LoginTabs']);
  }
}
