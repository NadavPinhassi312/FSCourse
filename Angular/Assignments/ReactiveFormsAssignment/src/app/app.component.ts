import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  assForm: FormGroup;
  statusArray:string[]=['Stable', 'Critical', 'Finished']
  ngOnInit(): void {
    this.assForm=new FormGroup({
      'name': new FormControl(null, [Validators.required,this.forbiddenName.bind(this)], this.forbiddenNameAsync),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'status':new FormControl('finished')
    })
  }

  onSubmit(){
    console.log(this.assForm.value)
  }

  forbiddenName(control: FormControl): {[s: string]: boolean} {
    if (control.value === "Test") {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenNameAsync(control:FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((Resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          Resolve({'nameIsForbidden': true});
        } else {
          Resolve(null)
        }
      }, 1500)
    });
    return promise;
  }
}


