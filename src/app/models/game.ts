import { MapData } from "./map-data";
import { BugInfo } from "./bug-info";

export class Game {
  id: number;
  map: MapData;
  bugInfos: BugInfo[];
  ticks: number;
  seed: number;

  constructor(id: number, map: MapData, bugInfos: BugInfo[], ticks: number, seed: number) {
    this.bugInfos = bugInfos;
    this.id = id;
    this.map = map;
    this.seed = seed;
    this.ticks = ticks;
  }
}
