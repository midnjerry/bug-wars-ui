import { Component, Input, OnInit } from '@angular/core';
import { APIClientService } from '../../services/apiclient.service';

@Component({
  selector: 'app-bug-dropdown',
  templateUrl: './bug-dropdown.component.html',
  styleUrls: ['./bug-dropdown.component.css'],
})
export class BugDropdownComponent implements OnInit {
  @Input() color: string;
  @Input() options: string[];
  scripts;

  constructor(
    private service: APIClientService,
  ) { }

  ngOnInit(): void {
    this.loadScripts();
  }

  loadScripts() {
    this.service.getAllAIScripts().subscribe(res=>{
      this.scripts=res;
    });
  }
}
