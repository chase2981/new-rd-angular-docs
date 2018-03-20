import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOutletStubComponent } from '../../testing/router-outlet-stub.component';
import { RouterOutletComponent } from './router-outlet.component';

describe('RouterOutletComponent', () => {
  let component: RouterOutletComponent;
  let fixture: ComponentFixture<RouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterOutletStubComponent, RouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
