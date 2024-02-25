import { Component, OnInit } from '@angular/core';
import { AccountComponent } from './account/account.component';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent {
  accounts: {name: string, status: string}[]=[];

  constructor(private accountsService: AccountService){}

  ngOnInit(){
    this.accounts=this.accountsService.accounts;
  }
  
  
}
