import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-script-editor',
  templateUrl: './script-editor.component.html',
  styleUrls: ['./script-editor.component.css']
})
export class ScriptEditorComponent {
  @Input() script: string;
  @Output() scriptEmitter = new EventEmitter<string>();

  lineCount: Array<number>;
  scrollTop = 0;

  constructor() {
    this.lineCount = [1];
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
