import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  onNumberAdded(eventData: { numberArray: any }) {
    const numberArray = eventData.numberArray;
    console.log("1")
    
  }
}
// oddArray:any=[];
//   evenArray:any=[];

// if (numberArray.length > 0) {
//   const lastNumber = numberArray[numberArray.length - 1];
//   if (lastNumber % 2 === 0) {
//     this.evenArray.push(lastNumber);
//   } else {
//     this.oddArray.push(lastNumber);
//   }
// }
// console.log(this.oddArray);
// console.log(this.evenArray);