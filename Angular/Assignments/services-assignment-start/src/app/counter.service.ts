export class CounterService{
    activeToInactive: number = 0;
    inactiveToActive: number = 0;
    
    inactiveToActiveCount(){
        this.inactiveToActive+=1;
        console.log("Inactive to Active Counter: " + this.inactiveToActive);
    }
    activeToInactiveCount(){
        this.activeToInactive+=1;
        console.log("Active to Inactive Counter: " + this.activeToInactive);
    }
}