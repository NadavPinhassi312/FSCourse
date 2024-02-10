import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer=false;
  serverCreationStatus="No server was created";
  serverName="";
  username="";
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus="Server was created! Name is " + this.serverName+".";
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  clearName(){
    this.username="";
  }
}
