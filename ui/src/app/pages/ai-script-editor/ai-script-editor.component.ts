import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ai-script-editor',
  templateUrl: './ai-script-editor.component.html',
  styleUrls: ['./ai-script-editor.component.css']
})
export class AiScriptEditorComponent implements OnInit {
  faHome = faHome;
  scriptText: string = '';
  constructor() { }
  ngOnInit(): void {
  }

}
