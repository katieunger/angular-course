// A service is a just a normal TypeScript class
// (It does not need a decorator like @Component or @Directive)
export class LoggingService {
  logStatusChange(status: string){
    console.log('A server status changed, new status: ' + status);
  }
}
