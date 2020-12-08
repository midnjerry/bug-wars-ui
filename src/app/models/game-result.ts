import { GameState } from "./game-state";

export class GameResult {
  result: string;
  winners: number[];
  gameStates: GameState[];

  constructor(result: string, winners: number[], gameStates: GameState[]){
    this.result = result;
    this.winners = winners;
    this.gameStates = gameStates;
  }
}
