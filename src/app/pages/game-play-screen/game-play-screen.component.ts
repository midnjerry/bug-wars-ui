import { timer, Subscription } from 'rxjs';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-game-play-screen',
  templateUrl: './game-play-screen.component.html',
  styleUrls: ['./game-play-screen.component.css']
})

export class GamePlayScreenComponent implements OnInit {

  message: String;
  countDown: Subscription;

  counter = 3; // 5 min
  delayInMilliseconds = 1000; // second

  constructor() { }

  ngOnInit(): void {
    this.countDown = timer(0, this.delayInMilliseconds).subscribe(() => --this.counter);
  }

  ngOnDestroy() {
    this.countDown = null;
  }

  // onTimerFinished(e:Event){
  //  if (e["action"] == "done"){
  //    this.message = "Time is up!"
  //   }
  // }

}
@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);

    if (value < 0) {
      return "Time is up!"
    }

    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
