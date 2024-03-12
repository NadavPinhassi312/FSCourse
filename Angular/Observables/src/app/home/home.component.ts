import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Subscription } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count=>{
    //   console.log(count);
    // })

    //Setting up the observable
    const costumIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if (count == 5){
          observer.complete();
        }
        if (count > 3){
          observer.error(new Error('Count is greater than 3!'))
        }
        count++;
      }, 1000);
    });

    //Operators!
    const oprObs = costumIntervalObservable.pipe(filter((data:number) =>{
      return data>0;
    }),map((data:number)=>{
      return "Round: " + (data + 1);
    }));

    //Subscribing to the observable and handling errors and completion
    this.firstSubscription = oprObs.subscribe(data =>{
      console.log(data);
    }, error =>{
      console.log("Error: " + error.message);
      alert(error.message);
    }, () => {
      console.log("Complete!");
    })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
