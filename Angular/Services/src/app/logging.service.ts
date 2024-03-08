export class LoggingService{
    newAccountAdded(status:string){
        console.log("A new account was added, the status is "+status);
    }
    logStatusChange(status:string){
        console.log('A server status changed, new status: '+status);
    }
}