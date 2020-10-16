import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css']
})
export class GameLobbyComponent implements OnInit {
  public slides = [
    { src: "https://incompetech.com/graphpaper/lite/1024%20boxes.png", desc: "map 1" },
    { src: "https://incompetech.com/graphpaper/lite/1024%20boxes.png", desc: "map 2" },
    { src: "https://incompetech.com/graphpaper/lite/1024%20boxes.png", desc: "map 3" }
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
