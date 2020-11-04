import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ScriptEditorComponent } from './script-editor.component';
import { APIClientService } from '../../services/apiclient.service';

describe('ScriptEditorComponent', () => {
  let component: ScriptEditorComponent;
  let fixture: ComponentFixture<ScriptEditorComponent>;
  let apiClient: APIClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [
      HttpClientTestingModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
      ScriptEditorComponent
    ]
    }).compileComponents;

    fixture = TestBed.createComponent(ScriptEditorComponent);
    apiClient = TestBed.inject(APIClientService);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit()', () => {
    it('should call updateAIScript() when scriptId is set', () => {
      //arrange
      let id = component.formScript.controls['scriptId']
      id.setValue(1);
      let updateSpy = spyOn(apiClient, 'updateAIScript').and.callThrough();

      //act
      component.onSubmit();

      //assert
      expect(updateSpy).toHaveBeenCalled();
    });
  });

  describe('onSubmit()', () => {
    it('should call createAIScript() when scriptId is not set', () => {
      //arrange
      let updateSpy = spyOn(apiClient, 'createAIScript').and.callThrough();

      //act
      component.onSubmit();

      //assert
      expect(updateSpy).toHaveBeenCalled();
    });
  });

});

