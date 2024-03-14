import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Use styleUrls with an 's' instead of styleUrl
})
export class AppComponent {
  @ViewChild('f') form:NgForm;
  defaultSubscription='advanced'

  onSubmit(){
    console.log(this.form)
  }
}

