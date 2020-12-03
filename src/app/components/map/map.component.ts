import { MapData } from './../../models/map-data';
import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { ImageAlt, Square } from 'ngx-bootstrap-icons';
import { APIClientService } from 'src/app/services/apiclient.service';
import { BugInfo} from 'src/app/models/bug-info';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() mapData: MapData;
  @ViewChild('canvas', { static: false })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  ground1 = new Image();
  ground2 = new Image();
  block = new Image();
  ground_img = new Image();
  bug1 = new Image();

  constructor(private apiClient: APIClientService) {}

  ngOnInit(): void {
    this.apiClient
      .getMap(1)
      .subscribe((response) => (this.mapData = response.body));
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.verifyCanvas();
    this.displayMap();
  }

  displayMap(): void {
    this.displayFloor(this.ctx);
    // this.displayWall(this.ctx);
  }

  verifyCanvas(): void {
    if (this.ctx) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }

  displayWall(context): void {
    this.block.onload = (): void => {
      for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
          if (
            i == 0 ||
            j == 0 ||
            i == 5 ||
            j == 5 ||
            this.getRandomIndex(10) == 0
          ) {
            let x: number = 128 * i;
            let y: number = 128 * j;
            context.drawImage(this.block, x, y);
          }
        }
      }
    };
    this.block.src = './assets/images/tiles/blocks/Block_A_02.png';
  }

  displayFloor(context): void {
    onload = (): void => {
      console.log('floor');
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          switch (this.getRandomIndex(2)) {
            case 0: {
              let w: number = 256 * i;
              let h: number = 256 * j;
              context.drawImage(this.ground1, w, h);
              this.displayWall(context);
              this.setBug(3, 3);
              break;
            }
            case 1: {
              let w: number = 256 * i;
              let h: number = 256 * j;
              context.drawImage(this.ground2, w, h);
              this.displayWall(context);
              this.setBug(3, 3);
              break;
            }
          }
        }
      }
    };
    this.ground1.src = './assets/images/tiles/ground/Ground_Tile_01_C.png';
    this.ground2.src = './assets/images/tiles/ground/Ground_Tile_02_C.png';
  }

  getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

  removeBug(x: number, y: number): number {
    return 0;
  }

  setBug(x: number, y: number) {
    this.bug1.onload = (): void => {
      console.log('bug');
      x = 128 * x + 26;
      y = 128 * y + 26;
      this.ctx.drawImage(this.bug1, x, y, 76, 76);
      this.rotateBug(this.ctx, x, y);
    };
    this.bug1.src = './assets/images/blue-bug.png';
  }

  rotateAndPaintImage(
    context,
    image,
    angleInRad,
    positionX,
    positionY,
    axisX,
    axisY
  ) {
    context.translate(positionX, positionY);
    context.rotate(angleInRad);
    context.drawImage(image, -axisX, -axisY, 76, 76);
    context.rotate(-angleInRad);
    context.translate(-positionX, -positionY);
  }

  rotateBug(context, x: number, y: number) {
    context.onload = (): void => {
      let i = 1;
      var animationInterval = setInterval(function () {
        console.log('hello');

        if (i % 4 == 0) {
          // facing west
          console.log(this.bug1);
          this.rotateAndPaintImage(this.ctx, this.bug1, 4.71, x, y, 76, 0);
        } else if (i % 3 == 0) {
          // facing south
          this.rotateAndPaintImage(this.ctx, this.bug1, 3.14, x, y, 76, 76);
        } else if (i % 2 == 0) {
          // facing east
          this.rotateAndPaintImage(this.ctx, this.bug1, 1.57, x, y, 0, 76);
        } else {
          context.drawImage(this.bug1, x, y, 76, 76);
        }
        if (i == 500) {
          clearInterval(animationInterval);
        }
        i++;
      }, 100);
    };
    this.bug1.src = './assets/images/blue-bug.png';
  }

  addFood(x: number, y: number): number {
    // Zero is a placeholder
    return 0;
  }

  removeFood(x: number, y: number): number {
    // Zero is a placeholder
    return 0;
  }
}
