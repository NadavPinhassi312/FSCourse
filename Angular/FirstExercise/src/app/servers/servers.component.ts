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
  serverCreated=false;
  servers=[]
  btnClicked=false;
  logs=[];
  logsValue=1;
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName)
    this.serverCreationStatus="Server was created! Name is " + this.serverName+".";
  }
  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  clearName(){
    this.username="";
  }

  onBtnClick(){
    this.btnClicked==false ? this.btnClicked=true :this.btnClicked=false
    this.logs.push(this.logsValue);
    this.logsValue++;
    
  }
  backgroundAboveFour(){
    return this.logsValue>5 ? "blue":"white";
  }
  logsAboveFour(){
    return this.logsValue>5 ? true: false;
  }
  
}
