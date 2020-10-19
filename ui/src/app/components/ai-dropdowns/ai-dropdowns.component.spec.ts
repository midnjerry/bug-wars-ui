import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiDropdownsComponent } from './ai-dropdowns.component';

describe('AiDropdownsComponent', () => {
  let component: AiDropdownsComponent;
  let fixture: ComponentFixture<AiDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
