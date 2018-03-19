import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialWrapperModule } from '@angular/material-examples/typings/material-wrapper-module';

import { RdAngularCoreModule } from '@rd/core';

import { LoginComponent } from './login.component';
import { RdAngularWrapperModule } from '../rd-angular-wrapper-module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RdAngularWrapperModule,
    MatFormFieldModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
