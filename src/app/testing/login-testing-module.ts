import {NgModule} from '@angular/core';
import { Router } from '@angular/router';

import { NgFormStubDirective } from '../testing/ng-form-stub.directive';
import { RouterLinkStubDirective } from '../testing/router-link-stub.directive';
import { RouterOutletStubComponent } from '../testing/router-outlet-stub.component';
import { RouterStub } from './router-stub';

@NgModule({
  declarations: [
    NgFormStubDirective,
    RouterLinkStubDirective,
    RouterOutletStubComponent,
  ],
  exports: [
    NgFormStubDirective,
    RouterLinkStubDirective,
    RouterOutletStubComponent,
  ],
  providers: [
    {provide: Router, useClass: RouterStub},
  ],
})
export class LoginTestingModule {}
