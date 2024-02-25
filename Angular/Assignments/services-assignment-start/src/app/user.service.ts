import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()

export class UserService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService:CounterService){}

    setToActive(i: number){
        this.activeUsers.push(this.inactiveUsers[i]);
        this.inactiveUsers.splice(i, 1);

        this.counterService.inactiveToActiveCount();
    }
    setToInactive(i: number){
        this.inactiveUsers.push(this.activeUsers[i]);
        this.activeUsers.splice(i, 1);
        
        this.counterService.activeToInactiveCount();
    }
}