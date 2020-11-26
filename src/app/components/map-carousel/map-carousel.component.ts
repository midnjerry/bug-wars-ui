import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import { scaleIn, scaleOut } from "./map-carousel.animations";

@Component({
  selector: 'map-carousel',
  templateUrl: './map-carousel.component.html',
  styleUrls: ['./map-carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(scaleIn, {params: { time: '300ms' }} )]),
      transition('* => void', [useAnimation(scaleOut, {params: { time: '300ms' }} )]),
      ])
  ]
})
export class MapCarouselComponent implements OnInit {
  @Input() slides;

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit(): void {
  }

}
