import { Component } from "@angular/core";
import { ServersComponent } from "../servers/servers.component";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color:white;
    }
    `]
})
export class ServerComponent{
    serverID=10;
    serverStatus="offline";

    constructor(){
        this.serverStatus=Math.random() >0.5 ? 'online' : 'offline' 
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus=='online'?"green":"red"
    }
}