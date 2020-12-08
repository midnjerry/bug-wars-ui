export class DirectionInfo {
  rotRadians: number;
  offsetX: number;
  offsetY: number;

  constructor(rotRadians: number, offsetX: number, offsetY: number) {
    this.rotRadians = rotRadians;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }
}
