import { Component, EventEmitter, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  numbers=[];
  public num: number=1;
  public myInterval:any;
  @Output() arrayCreated = new EventEmitter<{numberArray: any}>();

  onClickedStart(){
    const Iteration = () => {
      this.numbers.push(this.num)
      this.num+=1;
      this.arrayCreated.emit({numberArray:this.numbers});
      console.log("from game component: ", this.numbers)
    }
    this.myInterval = setInterval(()=>{Iteration()}, 1000);
  }
  onClickedStop(){
    clearInterval(this.myInterval);
    location.reload()
  }

}
