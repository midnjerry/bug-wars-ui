import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-dropdown',
  templateUrl: './bug-dropdown.component.html',
  styleUrls: ['./bug-dropdown.component.css'],
})
export class BugDropdownComponent implements OnInit {
  @Input() color: string;
  @Input() options: [string];

  constructor() {}

  ngOnInit(): void {}
}
