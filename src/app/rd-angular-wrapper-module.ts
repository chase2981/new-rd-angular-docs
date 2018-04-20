import {NgModule, Injectable} from '@angular/core';

import {
  RdAngularCoreModule, CoreAuthServiceConfig, CoreAuthService
} from '@rd/core';
import { environment } from '../environments/environment';
// import { CoreAuthService2 } from './shared/auth/core-auth.service';
// import { CommonModule } from '@angular/common';

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

// @NgModule({
//   imports: [
//     CommonModule,
//   ],
//   providers: [
//     { provide: CoreAuthServiceConfig, useClass: RdCoreAuthServiceConfig },
//     { provide: CoreAuthService, useClass: CoreAuthService2 },
//   ]
// })
// export class RdAngularWrapperModule {}
