import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CoreAuthService } from '@rd/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: CoreAuthService, private router: Router) {}

    canActivate() {
        let authenticated = this.authService.isAuthenticated();
        if (authenticated) {
            return true;
        } else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    }

}