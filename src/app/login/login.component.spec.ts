import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CoreAuthService, CoreApiService } from "@rd/core";

import { LoginComponent } from "./login.component";
import { Router } from "@angular/router";

// import { DocsAppTestingModule } from '../testing/testing-module';
import { LoginTestingModule } from "../testing/login-testing-module";
import { FormBuilder } from "@angular/forms";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // DocsAppTestingModule,
        LoginTestingModule
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: CoreAuthService, useValue: {} },
        { provide: CoreApiService, useValue: {} },
        {
          provide: FormBuilder,
          useValue: {
            group: args => {}
          }
        }
        // { provide: Router, useClass: RouterStub },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
