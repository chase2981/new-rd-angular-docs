import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreAuthService, CoreApiService } from '@rd/core';

import { NgFormStubDirective } from '../testing/ng-form-stub';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterStub } from '../testing/router-stub';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, NgFormStubDirective ],
      providers: [
        { provide: CoreAuthService, useValue: {} },
        { provide: CoreApiService, useValue: {} },
        { provide: Router, useClass: RouterStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
