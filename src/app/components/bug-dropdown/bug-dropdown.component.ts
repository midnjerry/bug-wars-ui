import { Component, Input, OnInit } from '@angular/core';
import { APIClientService } from '../../services/apiclient.service';
import { AIScript } from '../../models/aiscript';

@Component({
  selector: 'app-bug-dropdown',
  templateUrl: './bug-dropdown.component.html',
  styleUrls: ['./bug-dropdown.component.css'],
})
export class BugDropdownComponent implements OnInit {
  @Input() color: string;
  @Input() options: string[];
  scripts;
  selectedScript: AIScript;


  constructor(
    private service: APIClientService,
  ) { }

  ngOnInit(): void {
    this.loadScripts();
    console.log("Testing this!");
  }

  loadScripts() {
    // this.service.getAllAIScripts().subscribe(res=>{
    //   this.scripts=res;
    // });

    this.scripts = [
      { name: 'Arizona', abbrev: 'AZ'},
      { name: 'California', abbrev: 'CA' },
      { name: 'Colorado', abbrev: 'CO' },
      { name: 'New York', abbrev: 'NY' },
      { name: 'Pennsylvania', abbrev: 'PA' },
    ];
  }

  selected(){
    console.log(this.selectedScript.name);
  }
}
