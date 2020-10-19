import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiScriptEditorComponent } from './ai-script-editor.component';

describe('AiScriptEditorComponent', () => {
  let component: AiScriptEditorComponent;
  let fixture: ComponentFixture<AiScriptEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiScriptEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiScriptEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
