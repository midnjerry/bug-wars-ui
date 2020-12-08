import { GameResult } from '../models/game-result';

export class GameResultResponse {
    gameResult: GameResult;
    error: string;

    constructor(gameResult: GameResult, error: string) {
        this.gameResult = gameResult;
        this.error = error;
    }
}

