export class BugResponse {
  team: number;
  direction: string;
  command: string;
  dying: boolean;
  startX: number;
  startY: number;
  endX: number;
  endY: number;

  constructor(team: number, direction: string, command: string, dying: boolean, startX: number, startY: number, endX: number, endY: number){
    this.team = team;
    this.direction = direction;
    this.command = command;
    this.dying = dying;
    this.endX = endX;
    this.endY = endY;
    this.startX = startX;
    this.startY = startY;
  }
}
