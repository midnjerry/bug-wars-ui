import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiListComponent } from './ai-list.component';

describe('AiListComponent', () => {
  let component: AiListComponent;
  let fixture: ComponentFixture<AiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
