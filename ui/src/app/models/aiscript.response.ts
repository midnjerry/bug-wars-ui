import { AIScript } from '../models/aiscript';
export class AIScriptResponse{
    ai: AIScript;
    error: string;

    constructor(ai: AIScript, error: string) {
        this.ai = ai;
        this.error = error;
    }
}
