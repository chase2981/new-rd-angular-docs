import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialWrapperModule } from '@angular/material-examples/typings/material-wrapper-module';

import { RdAngularCoreModule } from '@rd/core';

import { LoginComponent } from './login.component';
import { RdAngularWrapperModule } from '../rd-angular-wrapper-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatIconModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    RdAngularWrapperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
