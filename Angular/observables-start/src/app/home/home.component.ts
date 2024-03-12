import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, observable, Subscription } from 'rxjs';
import { Observable } from 'rxjs-compat';

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

    const costumIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if (count>3){
          observer.error(new Error('Count is greater than 3!'))
        }
        count++;
      }, 1000);
    });

    this.firstSubscription = costumIntervalObservable.subscribe(data =>{
      console.log(data);
    }, error =>{
      console.log(error.message);
      alert(error.message);
    })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
