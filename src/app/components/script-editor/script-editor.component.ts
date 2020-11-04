import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { APIClientService } from '../../services/apiclient.service';
import { AIScript } from '../../models/aiscript';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import 'codemirror/addon/display/placeholder.js';

@Component({
  selector: 'app-script-editor',
  templateUrl: './script-editor.component.html',
  styleUrls: ['./script-editor.component.css'],
})
export class ScriptEditorComponent implements OnInit {
  formScript: FormGroup;
  data;
  errorMessage: string;
  ngOnInit(): void {}
  @Input() script: string;
  @Input() title: string;
  @Input() id: string = null;

  @Output() scriptEmitter = new EventEmitter<string>();

  options = {
    lineNumbers: true,
    mode: 'markdown',
    placeholder: 'these options'
  };

  constructor(
    private service: APIClientService,
    private formBuilder: FormBuilder
  ) {
    this.formScript = this.formBuilder.group({
      scriptName: this.title,
      scriptText: this.script,
      scriptId: this.id
    });
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
