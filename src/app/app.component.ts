import { Component, EventEmitter, Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { HomeService } from './modules/home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobthai';

  @Output() resetPages = new EventEmitter<any>();
  public userType: string | undefined;
  public taxInfo: any;

  item: any
  closeBefore: boolean = localStorage.getItem('closeBefore') == 'false' ? false : true;
  HomePage: boolean = localStorage.getItem('HomePage') == 'true' ? true : false;
  constructor(
    private homeService: HomeService,
  ) {
    homeService.$taxInfo.subscribe(data => {
      console.log('LOGGGG >>> :: taxInfo !!! ::', data);
      this.taxInfo = data;
      this.userType = data.roleId;
    });
    homeService.$userType.subscribe(data => {
      console.log('LOGGGG >>> :: userType ::', data);
      this.userType = data;
    });

  }

  ngOnInit(): void {
    console.log('H', localStorage.getItem('HomePage'))
    console.log('C', localStorage.getItem('closeBefore'))


    const uType = localStorage.getItem('userType');
    const tax: any = localStorage.getItem('taxInfo');
    let taxInfo = JSON.parse(tax);
    if (taxInfo) {
      if (taxInfo.roleId == 'admin' || taxInfo.roleId == 'user') {
        this.userType = taxInfo.roleId;
      } else {
        if (uType) {
          this.homeService.$userType = of(JSON.parse(uType));
        } else {
          const userType = {
            roleId: 'home'
          }
          this.homeService.$userType = of('home');
          this.homeService.$taxInfo = of(userType);
        }
      }
    } else {
      if (uType) {
        this.homeService.$userType = of(JSON.parse(uType));
      } else {
        const userType = {
          roleId: 'home'
        }
        this.homeService.$userType = of('home');
        this.homeService.$taxInfo = of(userType);
      }
    }

  }

  gotoHome(item: any) {

  }

  gotoWebsite() {
    this.HomePage = true;
    this.closeBefore = false
    localStorage.setItem('HomePage', 'true');
    localStorage.setItem('closeBefore', 'false');
  }

  resetPage() {
    this.resetPages.emit(this.item);
    this.HomePage = false;
    this.closeBefore = true
    localStorage.setItem('HomePage', 'false');
    localStorage.setItem('closeBefore', 'true');
  }
}