import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Router } from '@angular/router';
import { CoreAuthService } from '@rd/core';

@Injectable()
export class LogoffResolve implements Resolve<any> {

  constructor(private coreAuthSvc: CoreAuthService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {

    // sessionStorage.removeItem('rdUserId');
    // sessionStorage.removeItem('rdUserAuthToken');
    this.tryLogoffCoreApi();

    return Promise.resolve('cuz');
  }

  tryLogoffCoreApi(){
    try {
      this.coreAuthSvc.logout();
    } catch (e) {
      console.log("authSvc.logout() failed");
    }
  }
}

