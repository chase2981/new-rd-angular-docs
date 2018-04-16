import {async, TestBed} from '@angular/core/testing';
import {MainLayout, MainLayoutModule} from './main-layout';
import {DocsAppTestingModule} from '../../testing/testing-module';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('MainLayout', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MainLayoutModule, DocsAppTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should contain logoff route', () => {

  });
});
