import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home-service/home.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  deptList:any[] = [];
  pageIndex:number = 1;
  constructor(
    public loadig:HomeService
  ) { }

  ngOnInit() { 
  }

  ionViewWillEnter(){
    let parame = {
      depotStatus:this.pageIndex,
      pageIndex:1,
      pageSize:12
    }
    this.loadig.HomeLoading(parame).subscribe((res: Response | any) => {
      if (res.data['length'] > 0) {
        this.deptList.push(...res.data);
      }
    }, err => {
      
    });
  }

  //点击一条数据
  Active(item){
      alert(JSON.stringify(item));
  }

  //下拉刷新
  doRefresh(refresher){
    this.pageIndex = 1;
    this.deptList = [];
    setTimeout(() => {
      this.ionViewWillEnter();
      refresher.target.complete();
    }, 1000);
  }

  //上拉加载多
  doInfinite(infiniteScroll){
    this.pageIndex++;
    setTimeout(() => {
      this.ionViewWillEnter();
      infiniteScroll.target.complete();
    }, 1000);
  }
}
