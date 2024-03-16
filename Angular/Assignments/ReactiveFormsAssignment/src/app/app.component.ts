import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  assForm: FormGroup;
  statusArray:string[]=['Stable', 'Critical', 'Finished']
  initialValue:string='Critical'
  ngOnInit(): void {
    this.assForm=new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'status':new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.assForm.value)
  }
}
