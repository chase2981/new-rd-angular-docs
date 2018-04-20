import { AuthService } from "@rd/core";
import { Injectable } from "@angular/core";

@Injectable()
export class CoreAuthService2 extends AuthService {
  isAuthenticated(){
    return sessionStorage.getItem('rdUserId') && sessionStorage.getItem('rdUserAuthToken') ? true : false;
  }

  logout(){
    sessionStorage.clear();
  }
}
