import { MapData } from './../../models/map-data';
import { ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ImageAlt } from 'ngx-bootstrap-icons';
import { APIClientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() mapData: MapData;
  @ViewChild('canvas', { static: true })
  canvas: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;
  ground1 = new Image();
  ground2 = new Image();
  block = new Image();

  constructor(private apiClient: APIClientService) { }

  ngOnInit(): void {
    this.ground1.src = "./assets/images/tiles/ground/Ground_Tile_01_C.png";
    this.ground2.src = "./assets/images/tiles/ground/Ground_Tile_02_C.png";
    this.block.src = "./assets/images/tiles/blocks/Block_A_02.png";

    this.apiClient.getMap(1).subscribe((response) => this.mapData = response.body);
  }

  ngAfterViewInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.displayMap();
  }

  displayMap(): void {
    this.displayFloor(this.ctx);
    this.displayWall(this.ctx);
  }

  displayWall(context): void {
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        if (i == 0 || j == 0 || i == 5 || j == 5 || this.getRandomIndex(10) == 0) {
          context.drawImage(this.block, 128 * i, 128 * j);
        }
      }
    }
  }

  displayFloor(context): void {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        switch (this.getRandomIndex(2)) {
          case 0: {
            context.drawImage(this.ground1, 256 * i, 256 * j);
            break;
          }
          case 1: {
            context.drawImage(this.ground2, 256 * i, 256 * j);
            break;
          }
        }
      }
    }
  }

  getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }
}
