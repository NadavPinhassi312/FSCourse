import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: ['.online{background-color:white;}']
})
export class ServersComponent {
  allowNewServer=false;
  serverCreationStatus="No server was created";
  serverName="";
  username="";
  serverCreated=false;
  servers=[]
  btnClicked=false;

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
    if (this.btnClicked==false){
      this.btnClicked=true
    }
    else if (this.btnClicked==true){
      this.btnClicked=false
    }
    
  }
}
