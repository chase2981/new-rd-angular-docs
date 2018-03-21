import {NgModule, Injectable} from '@angular/core';

import {
  RdAngularCoreModule, CoreAuthServiceConfig
} from '@rd/core';
import { environment } from '../environments/environment';

@Injectable()
export class RdCoreAuthServiceConfig implements CoreAuthServiceConfig {
  apiKey: string = environment.rd.coreApiKey;
  authToken: string = '';
  secretKey: string = environment.rd.coreSecretKey;
  userId: string = '';

  constructor() {
    this.authToken = sessionStorage.getItem('rdUserAuthToken');
    this.userId = sessionStorage.getItem('rdUserId');
  }

  get host() {
    if (environment.production)
      return '//api-dev.rentdynamics.com';

    // return 'https://25ed31e4.ngrok.io';
    return '//api-dev.rentdynamics.com';
  }
}

@NgModule({
  exports: [
    RdAngularCoreModule,
  ],
  providers: [
    { provide: CoreAuthServiceConfig, useClass: RdCoreAuthServiceConfig }
  ]
})
export class RdAngularWrapperModule {}
