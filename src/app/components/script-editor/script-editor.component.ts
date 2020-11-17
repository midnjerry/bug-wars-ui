import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { APIClientService } from '../../services/apiclient.service';
import { AIScriptResponse } from '../../models/aiscript.response';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import 'codemirror/addon/display/placeholder.js';
import { ActivatedRoute, Router } from '@angular/router';
import { AIScript } from '../../models/aiscript';

@Component({
  selector: 'app-script-editor',
  templateUrl: './script-editor.component.html',
  styleUrls: ['./script-editor.component.css'],
})
export class ScriptEditorComponent implements OnInit {
  formScript: FormGroup;
  data;
  err;
  errorMessage;
  ngOnInit(): void {
    this.loadAIScript();
  }
  aiScriptResponse: AIScriptResponse = new AIScriptResponse(new AIScript(null, "", ""), "");
  example: string;

  options = {
    lineNumbers: true,
    mode: 'markdown',
    placeholder: 'these options'
  };

  constructor(
    private router: Router,
    private service: APIClientService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.formScript = this.formBuilder.group({
      scriptName: this.aiScriptResponse.ai.name,
      scriptText: this.aiScriptResponse.ai.script,
      scriptId: this.aiScriptResponse.ai.id
    });
  }

  loadAIScript(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null) {
      this.service.getAIScript(+id).subscribe(resp => {
        this.aiScriptResponse = resp.body;
        this.formScript.controls['scriptName'].setValue(this.aiScriptResponse.ai.name);
        this.formScript.controls['scriptText'].setValue(this.aiScriptResponse.ai.script);
        this.formScript.controls['scriptId'].setValue(this.aiScriptResponse.ai.id);
      }, error => {
        this.err = error.status
        if(this.err == 404){
          this.router.navigate(['/script-not-found']);
        }
      });
    }
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
          this.data = results.body.ai;
          if (results.status == 200){
            this.errorMessage = 'Successfully Saved AI Script';
          }
        },
        error => {
          this.errorMessage = error.error.error;
          
        }
      );
    }
    else {
      this.service.updateAIScript(returnScript).subscribe(
        (results) => {
          console.log('Data is received - Result - ', results);
          this.data = results.body.ai;
          if (results.status == 200){
            this.errorMessage = 'Successfully Updated AI Script';
          }
        },
        error => {
          this.errorMessage = error.error.error;
          
        }
        
    );
    }
  }
}
