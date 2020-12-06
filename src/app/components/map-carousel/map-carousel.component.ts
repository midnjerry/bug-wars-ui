import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  useAnimation,
} from '@angular/animations';
import { scaleIn, scaleOut } from './map-carousel.animations';

@Component({
  selector: 'map-carousel',
  templateUrl: './map-carousel.component.html',
  styleUrls: ['./map-carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '300ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '300ms' } }),
      ]),
    ]),
  ],
})
export class MapCarouselComponent implements OnInit {
  @Input() slides: Array<HTMLImageElement>;

  map1 = new Image();
  map2 = new Image();
  map3 = new Image();
  map4 = new Image();
  map5 = new Image();
  map6 = new Image();

  currentSlide = 0;

  constructor() { }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }

  ngOnInit(): void {
    this.map1.src = './assets/images/tiles/ground/Ground_Tile_01_A.png';
    this.map2.src = './assets/images/tiles/ground/Ground_Tile_02_A.png';
    this.map3.src = './assets/images/tiles/ground/Ground_Tile_01_B.png';
    this.map4.src = './assets/images/tiles/ground/Ground_Tile_01_A.png';
    this.map5.src = './assets/images/tiles/ground/Ground_Tile_01_A.png';
    this.map6.src = './assets/images/tiles/ground/Ground_Tile_01_A.png';
    this.slides = [
      this.map1,
      this.map2,
      this.map3,
      this.map4,
      this.map5,
      this.map6,
    ];
  }
}
