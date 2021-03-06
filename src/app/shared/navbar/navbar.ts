import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {ThemePickerModule} from '../theme-picker/theme-picker';
import {VersionPickerModule} from '../version-picker';
import {SECTIONS} from '../documentation-items/documentation-items';
import { UserProfilePickerModule } from '../user-profile-picker';

const SECTIONS_KEYS = Object.keys(SECTIONS);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {
  get sections() {
    return SECTIONS;
  }

  get sectionKeys() {
    return SECTIONS_KEYS;
  }
}

@NgModule({
  imports: [MatButtonModule, MatMenuModule, RouterModule, ThemePickerModule, UserProfilePickerModule, VersionPickerModule, CommonModule],
  exports: [NavBar],
  declarations: [NavBar],
})
export class NavBarModule {}
