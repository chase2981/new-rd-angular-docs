import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CoreAuthService, CoreApiService } from '@rd/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username = '';
  password = '';
  errorMessage = '';
  private unsubscribe: Subject<{}> = new Subject();
  public loading = false;

  constructor(private authSvc: CoreAuthService, private coreApiSvc: CoreApiService, private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('rdUserId') && sessionStorage.getItem('rdUserAuthToken')){
      console.log('already logged in..')
      // this.router.navigateByUrl('');
    }
  }

  onLogin() {
    this.loading = true;
    const user = { username: this.username, password: this.password };
    this.authSvc.login(user).then((response) => {
      const userEndpoint = `/users/${this.authSvc.userId}?include=role`;
      this.coreApiSvc.get(userEndpoint).takeUntil(this.unsubscribe).subscribe((result) => {
        if (result.role.id === 1) {
          this.loading = false;
          this.router.navigate(['']);
        } else {
          this.authSvc.logout();
          this.password = '';
          this.loading = false;
          this.errorMessage = 'You are not authorized to access this app!';
        }
      });
    })
      .catch((error) => {
        this.password = '';
        this.loading = false;
        this.errorMessage = error.json().error_message;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
