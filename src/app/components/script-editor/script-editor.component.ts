import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { APIClientService } from '../../services/apiclient.service';
import { AIScript } from '../../models/aiscript';
import { FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-script-editor',
  templateUrl: './script-editor.component.html',
  styleUrls: ['./script-editor.component.css'],
})
export class ScriptEditorComponent implements OnInit {
  formScript;
  data;
  errorMessage: string;
  ngOnInit(): void {}
  @Input() script: string = '# Enter your commands here';
  @Input() title: string;
  @Output() scriptEmitter = new EventEmitter<string>();
  options = {
    lineNumbers: true,
    mode: 'markdown',
  };

  constructor(
    private service: APIClientService,
    private formBuilder: FormBuilder
  ) {
    this.formScript = this.formBuilder.group({
      scriptName: this.title,
      scriptText: this.script,
    });
  }

  onSubmit() {
    let returnScript = new AIScript(
      null,
      this.formScript.controls['scriptName'].value,
      this.formScript.controls['scriptText'].value
    );

    this.service.createAIScript(returnScript).subscribe(
      (results) => {
        console.log('Data is received - Result - ', results);
        this.data = results.ai;
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = 'Failed to connect.';
        if (error?.message) {
          this.errorMessage = error.statusText;
        }
      }
    );
  }
}
