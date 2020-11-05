import { Component, OnInit } from '@angular/core';
import { SCRIPTS } from './mock-scripts';
import { APIClientService } from '../../services/apiclient.service';

@Component({
  selector: 'app-all-scripts-list',
  templateUrl: './all-scripts-list.component.html',
  styleUrls: ['./all-scripts-list.component.css']
})
export class AllScriptsListComponent implements OnInit {
  scripts;
  constructor(
    private service: APIClientService,
  ) { }

  ngOnInit(): void {
    this.service.getAllAIScripts().subscribe(res=>this.scripts=res);
  }

  autoFill(): void {
    
  }

}
