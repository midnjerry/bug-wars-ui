import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BugDropdownComponent } from './bug-dropdown.component';
import { APIClientService } from '../../services/apiclient.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AIScript } from '../../models/aiscript';
import { of } from 'rxjs';

describe('BugDropdownComponent', () => {
  let component: BugDropdownComponent;
  let fixture: ComponentFixture<BugDropdownComponent>;
  let apiClient: APIClientService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ BugDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    apiClient = TestBed.inject(APIClientService);
    fixture = TestBed.createComponent(BugDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadScripts on startup', () => {
    // arrange
    let updateSpy = spyOn(component, 'loadScripts').and.callThrough();

    // act
    component.ngOnInit();

    // assert
    expect(updateSpy).toHaveBeenCalled();

  });

  it('should call and assign scripts to value with loadScripts', () => {
    // arrange
    let expected = [new AIScript(1, "hi", "hello"), new AIScript(2, "hello", "hi")];
    let updateSpy = spyOn(apiClient, 'getAllAIScripts').and.returnValue(of(expected));
    component.scripts = null;

    //act
    component.loadScripts();

    //assert
    expect(updateSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
    expect(component.scripts).toBe(expected);
  });
});
