import {Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule} from '@angular/core';
import {StyleManager} from '../style-manager/style-manager';
import {
  MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule,
  MatTooltipModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'user-profile-picker',
  templateUrl: 'user-profile-picker.html',
  styleUrls: ['user-profile-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'aria-hidden': 'false'},
})
export class UserProfilePicker {
  
}

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatTooltipModule,
    RouterModule,
    CommonModule
  ],
  exports: [UserProfilePicker],
  declarations: [UserProfilePicker],
  providers: [StyleManager],
})
export class UserProfilePickerModule { }
