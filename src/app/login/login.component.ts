import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CoreAuthService, CoreApiService } from '@rd/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';

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
  usernameFc = new FormControl('', [Validators.required]);
  passwordFc = new FormControl('', [Validators.required, Validators.min(6)]);
  form = this.fb.group({
    usernameFc: this.usernameFc,
    passwordFc: this.passwordFc
  })


  constructor(private authSvc: CoreAuthService, private coreApiSvc: CoreApiService, private router: Router,
  public fb: FormBuilder) { }

  ngOnInit() {
    if(sessionStorage.getItem('rdUserId') && sessionStorage.getItem('rdUserAuthToken')){
      console.log('already logged in..')
      // this.router.navigateByUrl('');
    }
  }

  onLogin() {
    if(this.form.invalid)
      return;
    this.loading = true;
    const user = { username: this.username, password: this.password };
    this.authSvc.login(user).then((response) => {
      const userEndpoint = `/users/${this.authSvc.userId}?include=role`;
      this.coreApiSvc.get(userEndpoint).subscribe((result) => {
        if (result.role.id === 1) {
          this.loading = false;
          this.router.navigateByUrl('/');
        } else {
          this.authSvc.logout();
          this.password = '';
          this.loading = false;
          this.errorMessage = 'You are not authorized to access this app!';
        }
      }, (err) => {
        /* workaround for now until the apiKey issue is fixed */
        console.log(err);
        this.router.navigateByUrl('/');
      });
    })
      .catch((error) => {
        this.password = '';
        this.loading = false;
        this.errorMessage = error.json().error_message;
      });
  }

  getErrorMessage(fc: FormControl) {
    return fc.hasError('required') ? 'You must enter a value' :
        fc.hasError('min') ? 'You must enter a value greater than six charaters' :
            '';
  }

  ngOnDestroy() {

  }
}
