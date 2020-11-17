import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AIScript } from '../models/aiscript';
import { AIScriptResponse} from '../models/aiscript.response';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {
  getAIScript(id: number) {
    const url = environment.getAllAiScriptUrl + '/'+ id;
    return this.http.get<AIScriptResponse>(url, {observe : 'response'});
  }
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

  createAIScript(input: AIScript){
    const url = environment.getAllAiScriptUrl;
    return this.http.post<AIScriptResponse>(url, input, {observe : 'response'});
  }

  updateAIScript(input: AIScript){
    const {id}= input;
    const url = environment.getAllAiScriptUrl + '/'+ id;
    return this.http.put<AIScriptResponse>(url, input, {observe : 'response'});
  }
}
