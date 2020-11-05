import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { APIClientService } from '../../services/apiclient.service';
import { AIScript } from '../../models/aiscript';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import 'codemirror/addon/display/placeholder.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-script-editor',
  templateUrl: './script-editor.component.html',
  styleUrls: ['./script-editor.component.css'],
})
export class ScriptEditorComponent implements OnInit {
  formScript: FormGroup;
  data;
  errorMessage: string;
  ngOnInit(): void {
    this.loadAIScript();
  }
  aiScript: AIScript = new AIScript(null, '', '');

  options = {
    lineNumbers: true,
    mode: 'markdown',
    placeholder: 'these options'
  };

  constructor(
    private service: APIClientService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.formScript = this.formBuilder.group({
      scriptName: this.aiScript.name,
      scriptText: this.aiScript.script,
      scriptId: this.aiScript.id
    });
  }

  loadAIScript(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id !== null) {
      this.service.getAIScript(+id).subscribe(script => this.aiScript = script);
    }
    //this.service.getAIScript(id).subscribe(script => this.aiScript = script);
    console.log(id);
    console.log(this.aiScript);
    this.formScript.controls['scriptName'].setValue(this.aiScript.name);
    this.formScript.controls['scriptText'].setValue(this.aiScript.script);
    this.formScript.controls['scriptId'].setValue(this.aiScript.id);
  }

  onSubmit() {
    let scriptId = this.formScript.controls['scriptId'].value;

    let returnScript = new AIScript(
      scriptId,
      this.formScript.controls['scriptName'].value,
      this.formScript.controls['scriptText'].value
    );

    if(scriptId == null){
      this.service.createAIScript(returnScript).subscribe(
        (results) => {
          console.log('Data is received - Result - ', results);
          this.data = results.ai;
        },
        (error: HttpErrorResponse) => {
          this.errorMessage = 'Failed to connect.';
          if (error.message) {
            this.errorMessage = error.statusText;
          }
        }
      );
    }
    else {
      this.service.updateAIScript(returnScript).subscribe(
        (results) => {
          console.log('Data is received - Result - ', results);
          this.data = results.ai;
        },
        (error: HttpErrorResponse) => {
          this.errorMessage = 'Failed to connect.';
          if (error.message) {
            this.errorMessage = error.statusText;
        }
      }
    );
    }
  }
}
