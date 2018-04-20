import { Injectable, NgModule } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '@rd/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreAuthService } from '@rd/core';

@Injectable()
export class LogoffResolve implements Resolve<any> {

  constructor(private coreAuthSvc: CoreAuthService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {

    sessionStorage.removeItem('rdUserId');
    sessionStorage.removeItem('rdUserAuthToken');
    this.coreAuthSvc.logout();

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
