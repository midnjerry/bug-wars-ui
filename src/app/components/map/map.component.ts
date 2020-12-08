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
import { ImageAlt, Square } from 'ngx-bootstrap-icons';
import { APIClientService } from 'src/app/services/apiclient.service';
import { BugInfo} from 'src/app/models/bug-info';
import { Bug } from 'src/app/models/bug';
import { DirectionInfo } from '../../models/direction-info';

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
  bugs = [this.bug1, this.bug2, this.bug3, this.bug4, this.bug5, this.bug6, this.bug7, this.bug8];

  constructor(private apiClient: APIClientService, private zone:NgZone) {}

  ngOnInit(): void {
    this.apiClient
      .getMap(1)
      .subscribe((response) => (this.mapData = response.body));

    this.bugs.forEach((element, index) => {
      element.src = './assets/images/bugwalk-'+ (index+1) + '.png';
      console.log(element);
    });

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
              break;
            }
            case 1: {
              let w: number = 256 * i;
              let h: number = 256 * j;
              context.drawImage(this.ground2, w, h);
              this.displayWall(context);
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


  setBug(bug: Bug) {
      let x = (128 * bug.endX) + 26;
      let y = (128 * bug.endY) + 26;
      let directionInfo = this.getDirection(bug.direction);
      this.ctxBug.clearRect(x, y, 76, 76);
      this.rotateAndPaintImage(this.ctxBug,this.bugs[7],directionInfo.rotRadians,x,y,directionInfo.offsetX,directionInfo.offsetY)
  };

  rotateAndPaintImage(context,image,angleInRad,positionX,positionY,axisX,axisY) {
    context.translate(positionX, positionY);
    context.rotate(angleInRad);
    context.drawImage(image, -axisX, -axisY, 76, 76);
    context.rotate(-angleInRad);
    context.translate(-positionX, -positionY);
  }

  moveButton() {
    this.moveBug(new Bug(1, "NORTH", "move", false, 2, 2, 2, 1));
    this.moveBug(new Bug(1, "EAST", "move", false, 1, 2, 2, 2));
    this.moveBug(new Bug(1, "SOUTH", "move", false, 1, 1, 1, 2));
    this.moveBug(new Bug(1, "WEST", "move", false, 2, 1, 1, 1));

    this.moveBug(new Bug(1, "NORTH", "move", false, 4, 4, 4, 3));
    this.moveBug(new Bug(1, "EAST", "move", false, 3, 4, 4, 4));
    this.moveBug(new Bug(1, "SOUTH", "move", false, 3, 3, 3, 4));
    this.moveBug(new Bug(1, "WEST", "move", false, 4, 3, 3, 3));

    this.moveBug(new Bug(1, "NORTH", "move", false, 4, 2, 4, 1));
    this.moveBug(new Bug(1, "EAST", "move", false, 3, 2, 4, 2));
    this.moveBug(new Bug(1, "SOUTH", "move", false, 3, 1, 3, 2));
    this.moveBug(new Bug(1, "WEST", "move", false, 4, 1, 3, 1));

    this.moveBug(new Bug(1, "NORTH", "move", false, 2, 4, 2, 3));
    this.moveBug(new Bug(1, "EAST", "move", false, 1, 4, 2, 4));
    this.moveBug(new Bug(1, "SOUTH", "move", false, 1, 3, 1, 4));
    this.moveBug(new Bug(1, "WEST", "move", false, 2, 3, 1, 3));
  }

  moveBug(bug: Bug){
    var directionInfo = this.getDirection(bug.direction);
    var startX = (128 * bug.startX) + 26;
    var startY = (128 * bug.startY) + 26;
    var endX = (128 * bug.endX) + 26;
    var endY = (128 * bug.endY) + 26;
    var differenceX = (endX - startX)/8;
    var differenceY = (endY - startY)/8;
    var self = this;
    let i = 1;

    function walking() {
      self.ctxBug.clearRect(startX+(differenceX*(i-1)), startY+(differenceY*(i-1)), 76, 76);
      self.rotateAndPaintImage(
        self.ctxBug, self.bugs[i-1], directionInfo.rotRadians, startX+(differenceX*i), startY+(differenceY*i), directionInfo.offsetX, directionInfo.offsetY
      );

      if(i == 8) {
        clearInterval(interval);
      }
      i++;
    }
    var interval = setInterval(walking, 125);
  }

  getDirection(direction: string): DirectionInfo {
    switch(direction) {
      case "EAST":
        return new DirectionInfo(1.57, 0, 76);
        break;
      case "SOUTH":
        return new DirectionInfo(3.14, 76, 76);
        break;
      case "WEST":
        return new DirectionInfo(4.71, 76, 0);
        break;
      default:
        return new DirectionInfo(6.28, 0, 0);
        break;
    }
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
