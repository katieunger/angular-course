import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

// When injecting a service into something, this something needs to have some metadata attached to it
// Services do not have this metadata
// We need to add @Injectable metadata - this is added to the service you wish to inject another service into
@Injectable()

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor (private loggingService: LoggingService) {

  }

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }

}
