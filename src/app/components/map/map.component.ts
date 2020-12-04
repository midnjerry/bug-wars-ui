import { MapData } from './../../models/map-data';
import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  ApplicationRef,
  NgZone,
} from '@angular/core';
import { ImageAlt, Square, Bug } from 'ngx-bootstrap-icons';
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
  @ViewChild('canvas2', { static: false })
  canvas2: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private ctxBug: CanvasRenderingContext2D;
  ground1 = new Image();
  ground2 = new Image();
  block = new Image();
  ground_img = new Image();
  bug1 = new Image();
  bug2 = new Image();
  bug3 = new Image();
  bug4 = new Image();
  bug5 = new Image();
  bug6 = new Image();
  bug7 = new Image();
  bug8 = new Image();

  constructor(private apiClient: APIClientService, private zone:NgZone) {}

  ngOnInit(): void {
    this.apiClient
      .getMap(1)
      .subscribe((response) => (this.mapData = response.body));
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctxBug = this.canvas2.nativeElement.getContext('2d');
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
              this.setBug(2,2);
              break;
            }
            case 1: {
              let w: number = 256 * i;
              let h: number = 256 * j;
              context.drawImage(this.ground2, w, h);
              this.displayWall(context);
              this.setBug(2,2);
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
        x = (128 * x) + 26;
        y = (128 * y) + 26;
        //this.ctxBug.drawImage(this.bug1, x, y, 76, 76);
        //this.animateMoveBug(x, y, 'NORTH').then(res => f2());
        // this.animateMoveBug(x, y, 'NORTH');
      }
    this.bug1.src = './assets/images/bugwalk-1.png';
    this.bug2.src = './assets/images/bugwalk-2.png';
    this.bug3.src = './assets/images/bugwalk-3.png';
    this.bug4.src = './assets/images/bugwalk-4.png';
    this.bug5.src = './assets/images/bugwalk-5.png';
    this.bug6.src = './assets/images/bugwalk-6.png';
    this.bug7.src = './assets/images/bugwalk-7.png';
    this.bug8.src = './assets/images/bugwalk-8.png';
  };

  rotateAndPaintImage(context,image,angleInRad,positionX,positionY,axisX,axisY) {
    context.translate(positionX, positionY);
    context.rotate(angleInRad);
    context.drawImage(image, -axisX, -axisY, 76, 76);
    context.rotate(-angleInRad);
    context.translate(-positionX, -positionY);
  }

  walkCircle(x, y) {
    this.bug8.onload = (): void => {
      x = (128 * x) + 26;
      y = (128 * y) + 26;
      this.animateMoveBug(x, y, 'NORTH');
    }
    this.bug1.src = './assets/images/bugwalk-1.png';
    this.bug2.src = './assets/images/bugwalk-2.png';
    this.bug3.src = './assets/images/bugwalk-3.png';
    this.bug4.src = './assets/images/bugwalk-4.png';
    this.bug5.src = './assets/images/bugwalk-5.png';
    this.bug6.src = './assets/images/bugwalk-6.png';
    this.bug7.src = './assets/images/bugwalk-7.png';
    this.bug8.src = './assets/images/bugwalk-8.png';
  }

  animateMoveBug(x: number, y: number, direction: string) {
    var self = this;
    let i = 1;
    var rotDegrees;
    var offsetX;
    var offsetY;

    switch(direction) {
      case "EAST":
        rotDegrees = 1.57;
        offsetX = 0;
        offsetY = 76;
        break;
      case "SOUTH":
        rotDegrees = 3.14;
        offsetX = 76;
        offsetY = 76;
        break;
      case "WEST":
        rotDegrees = 4.71;
        offsetX = 76;
        offsetY = 0;
        break;
      default:
        rotDegrees = 6.28319;
        offsetX = 0;
        offsetY = 0;
    }

    self.ctxBug.clearRect(x, y,100,100);

    function walking() {
      if(i>24){
        let endY = y+128+64;
        let endX = x+64;
        rotDegrees = 4.71;
        offsetY = 76;
        offsetX = 0;

        switch (i % 8) {
          case 1:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug8, rotDegrees, endX+112, endY, offsetX, offsetY);
              break;
          case 2:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug7, rotDegrees, endX+96, endY, offsetX, offsetY);
              break;
          case 3:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug6, rotDegrees, endX+80, endY, offsetX, offsetY);
              break;
          case 4:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug5, rotDegrees, endX+64, endY, offsetX, offsetY);
              break;
          case 5:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug4, rotDegrees,endX+48, endY, offsetX, offsetY);
              break;
          case 6:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug3, rotDegrees, endX+32, endY, offsetX, offsetY);
              break;
          case 7:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug2, rotDegrees, endX+16, endY, offsetX, offsetY);
              break;
          case 0:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug1, rotDegrees,endX, endY, offsetX, offsetY);
              break;
        }
    } else if(i>16){
        let end = x+112+13;
        rotDegrees = 3.14;
        offsetY = 76;
        offsetX = 76;

        switch (i % 8) {
          case 1:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug8, rotDegrees, end, y, offsetX, offsetY);
              break;
          case 2:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug7, rotDegrees, end, y+16, offsetX, offsetY);
              break;
          case 3:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug6, rotDegrees, end, y+32, offsetX, offsetY);
              break;
          case 4:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug5, rotDegrees, end, y+48, offsetX, offsetY);
              break;
          case 5:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug4, rotDegrees, end, y+64, offsetX, offsetY);
              break;
          case 6:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug3, rotDegrees, end, y+80, offsetX, offsetY);
              break;
          case 7:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug2, rotDegrees, end, y+96, offsetX, offsetY);
              break;
          case 0:
              self.ctxBug.clearRect(0, 0,500,500);
              self.rotateAndPaintImage(self.ctxBug, self.bug1, rotDegrees, end, y+112, offsetX, offsetY);
              break;
        }
    } else if(i>8){
      rotDegrees = 1.57;
      offsetY = 76;

      switch (i % 8) {
        case 1:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug8, rotDegrees, x+16, y, offsetX, offsetY);
            break;
        case 2:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug7, rotDegrees, x+32, y, offsetX, offsetY);
            break;
        case 3:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug6, rotDegrees, x+48, y, offsetX, offsetY);
            break;
        case 4:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug5, rotDegrees, x+64, y, offsetX, offsetY);
            break;
        case 5:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug4, rotDegrees, x+80, y, offsetX, offsetY);
            break;
        case 6:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug3, rotDegrees, x+96, y, offsetX, offsetY);
            break;
        case 7:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug2, rotDegrees, x+112, y, offsetX, offsetY);
            break;
        case 0:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug1, rotDegrees, x+128+13, y, offsetX, offsetY);
            break;
      }
    } else {
      switch (i % 8) {
        case 0:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug8, rotDegrees, x, y, offsetX, offsetY);
            break;
        case 1:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug7, rotDegrees, x, y+112, offsetX, offsetY);
            break;
        case 2:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug6, rotDegrees, x, y+96, offsetX, offsetY);
            break;
        case 3:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug5, rotDegrees, x, y+80, offsetX, offsetY);
            break;
        case 4:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug4, rotDegrees, x, y+64, offsetX, offsetY);
            break;
        case 5:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug3, rotDegrees, x, y+48, offsetX, offsetY);
            break;
        case 6:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug2, rotDegrees, x, y+32, offsetX, offsetY);
            break;
        case 7:
            self.ctxBug.clearRect(0, 0,500,500);
            self.rotateAndPaintImage(self.ctxBug, self.bug1, rotDegrees, x, y+16, offsetX, offsetY);
            break;
      }
    }

    if(i == 32) {
      clearInterval(interval);
    }

      // if (i == 8) {
      //   clearInterval(interval);
      // }
      i++;
      console.log(i);
    }
    var interval = setInterval(walking, 125);
    return new Promise((resolve, reject) => {
      resolve();
  });
  }

  rotateBug(x: number, y: number) {
    var self = this;
    let i = 1;

    function foo() {
      if (i % 4 == 0) {
        // facing west
        console.log(self.bug1);
        self.rotateAndPaintImage(self.ctx, self.bug1, 4.71, x, y, 76, 0);
      } else if (i % 3 == 0) {
        // facing south
        self.rotateAndPaintImage(self.ctx, self.bug1, 3.14, x, y, 76, 76);
      } else if (i % 2 == 0) {
        // facing east
        self.rotateAndPaintImage(self.ctx, self.bug1, 1.57, x, y, 0, 76);
      } else {
        console.log("YO");
        self.ctx.drawImage(self.bug1, x, y, 76, 76);
      }
      if (i == 20) {
        clearInterval(interval);
      }
      i++;
    }
    var interval = setInterval(foo, 100);
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
