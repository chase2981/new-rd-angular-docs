import {Component, ViewEncapsulation, ChangeDetectionStrategy, NgModule} from '@angular/core';
import {StyleManager} from '../style-manager/style-manager';
import {
  MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule,
  MatTooltipModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarModule } from '../navbar';


@Component({
  selector: 'main-layout',
  templateUrl: 'main-layout.html',
  styleUrls: ['main-layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {'aria-hidden': 'false'},
})
export class MainLayout {
  
}

@NgModule({
  imports: [
    NavBarModule,
    RouterModule,
    CommonModule
  ],
  exports: [MainLayout],
  declarations: [MainLayout],
  providers: [StyleManager],
})
export class MainLayoutModule { }
