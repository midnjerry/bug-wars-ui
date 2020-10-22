import { Component, OnInit } from '@angular/core';
import { faBug } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ai-dropdowns',
  templateUrl: './ai-dropdowns.component.html',
  styleUrls: ['./ai-dropdowns.component.css']
})
export class AiDropdownsComponent implements OnInit {
  faBug = faBug;

  constructor() { }

  ngOnInit(): void {
  }

}
