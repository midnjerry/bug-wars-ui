import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class APIClientService {
  getAllAIScripts(){
    const url = environment.getAllAiScriptUrl;
    response: AIScriptResponse = this.http.get(url);
    return this.http.get(url)
  }
  constructor(private http: HttpClient) { }
}
