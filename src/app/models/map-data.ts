import { Coordinate } from './coordinate';
import { SpawnPoint } from './spawn-point';
export class MapData {

  rows: string[][];
  spawns: SpawnPoint[];
  food: Coordinate[];

}
