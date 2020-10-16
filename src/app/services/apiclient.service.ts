import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AIScript } from '../models/aiscript';
import { AIScriptResponse} from '../models/aiscript.response';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {
  getAllAIScripts(){
    const url = environment.getAllAiScriptUrl;
    // // response = this.http.get(url).subscribe()
    // let response: AIScriptResponse;
    // this.http.get(url).subscribe(res => {
    //     // response =
    //     this.getAllAIScripts();
    // });

    return this.http.get<AIScript[]>(url);
  }
  constructor(private http: HttpClient) { }

  saveAI(input: AIScript){
    const url = environment.getAllAiScriptUrl;
    return this.http.post<AIScriptResponse>(url, input);
  }
}
