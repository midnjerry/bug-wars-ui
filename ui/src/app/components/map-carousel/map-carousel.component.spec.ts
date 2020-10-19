import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCarouselComponent } from './map-carousel.component';

describe('MapCarouselComponent', () => {
  let component: MapCarouselComponent;
  let fixture: ComponentFixture<MapCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
