import {async, TestBed} from '@angular/core/testing';
import {UserProfilePicker, UserProfilePickerModule} from './user-profile-picker';
import {DocsAppTestingModule} from '../../testing/testing-module';


describe('UserProfilePicker', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserProfilePickerModule, DocsAppTestingModule],
    }).compileComponents();
  }));

  it('should contain logoff route', () => {

  });
});
