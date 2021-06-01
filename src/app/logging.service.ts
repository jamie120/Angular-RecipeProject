export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server staus changed, new status: ' + status);
    }
}