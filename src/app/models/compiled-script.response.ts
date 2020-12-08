export class CompiledScriptResponse {
  id: number;
  bytecode: number[];
  error: string;

  constructor(id: number, bytecode: number[], error: string){
    this.bytecode = bytecode;
    this.error = error;
    this.id = id;
  }
}
