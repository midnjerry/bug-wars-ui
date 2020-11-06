import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptNotFoundComponent } from './script-not-found.component';

describe('ScriptNotFoundComponent', () => {
  let component: ScriptNotFoundComponent;
  let fixture: ComponentFixture<ScriptNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
