import { Injectable, NgModule } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '@rd/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Injectable()
export class LogoffResolve implements Resolve<any> {

  constructor(private authSvc: AuthService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    this.authSvc.logout();
    return Promise.resolve('cuz');
  }
} 

@NgModule({
  imports: [
    CommonModule, 
  ],
  providers: [
    LogoffResolve
  ]
})
export class LogoffModule { }
