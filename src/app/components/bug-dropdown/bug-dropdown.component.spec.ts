import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDropdownComponent } from './bug-dropdown.component';

describe('BugDropdownComponent', () => {
  let component: BugDropdownComponent;
  let fixture: ComponentFixture<BugDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
