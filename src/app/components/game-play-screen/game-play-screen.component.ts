import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-game-play-screen',
  templateUrl: './game-play-screen.component.html',
  styleUrls: ['./game-play-screen.component.css']
})

export class GamePlayScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  onTimerFinished(e:Event){
   if (e["action"] == "done"){
     alert("Time is up");
    }
  }



}
