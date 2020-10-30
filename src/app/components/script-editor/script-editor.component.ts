import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { APIClientService } from '../../services/apiclient.service'
import { AIScript } from '../../models/aiscript';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-script-editor',
  templateUrl: './script-editor.component.html',
  styleUrls: ['./script-editor.component.css']
})
export class ScriptEditorComponent implements OnInit{
  formScript;
  data;
  errorMessage : string;
  ngOnInit(): void {}
  @Input() script: string = "# Enter your commands here";
  @Input() title: string;
  @Output() scriptEmitter = new EventEmitter<string>();
  options = {
    lineNumbers: true,
    mode: 'markdown',
  }

  constructor(private service: APIClientService, private formBuilder: FormBuilder) {
    this.formScript = this.formBuilder.group({
      scriptName: this.title,
      scriptText: this.script
    });
  }

  onSubmit(){
    let returnScript = new AIScript(
      null, 
      this.formScript.controls["scriptName"].value, 
      this.formScript.controls["scriptText"].value);
    
      this.service.saveAI(returnScript).subscribe((results) => {
      console.log('Data is received - Result - ', results);
      this.errorMessage = results.error;
      this.data = results.ai;
    }, (error: any) => {
      console.log('Error: ' + error);
      this.errorMessage = "Failed to connect.";
    })
  }
}

