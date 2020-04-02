import {Component, NgModule, OnInit} from '@angular/core';
import {SvgViewerModule} from '../../shared/svg-viewer/svg-viewer';
import {MatButtonModule} from '@angular/material';
import {FooterModule} from '../../shared/footer/footer';
import {RouterModule} from '@angular/router';
import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: 'app-ng-conf',
  templateUrl: './ng-conf.html',
  styleUrls: ['./ng-conf.scss']
})
export class NgConf implements OnInit {
  constructor(public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = '';
  }
}

@NgModule({
  imports: [SvgViewerModule, MatButtonModule, FooterModule, RouterModule],
  exports: [NgConf],
  declarations: [NgConf],
})
export class NgConfModule {}
