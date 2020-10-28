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
  finalScript;
  data;
  ngOnInit(): void {
  }
  @Input() script: string;
  @Input() title: string;
  @Output() scriptEmitter = new EventEmitter<string>();
  lineCount: Array<number>;s
  scrollTop = 0;

  constructor(private service: APIClientService, private formBuilder: FormBuilder) {
    this.finalScript = this.formBuilder.group({
      scriptName: "",
      scriptText: ""
    });
    this.lineCount = [1];
  }

  onSubmit(){
    let returnScript = new AIScript(null, this.finalScript.controls["scriptName"].value, this.finalScript.controls["scriptText"].value);
    this.service.saveAI(returnScript).subscribe((results) => {
      console.log('Data is received - Result - ', results);
      this.data = results.error;
    })
  }

  handleScroll(event: Event) {
    const scrollValue = (event.target as Element).scrollTop;
    this.scrollTop = -scrollValue;
  }

  handleChange({target}) {
    const {value} = target;
    this.scriptEmitter.emit(value);
    this.updateLineCount(value);
  }

  updateLineCount(value: string) {
    this.lineCount = [1];
    for (let i = 0, num = 2; i < value.length; i++) {
      if (value[i] === '\n') {
        this.lineCount.push(num);
        num++;
      }
    }
  }
}

