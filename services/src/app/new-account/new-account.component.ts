import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from '../logging.service.ts'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Need to provide a service to tell Angular how to create instance of our service
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // Informing Angular that we require an instance of the logging service
  // Binding the instance to a property
  // Using TypeScript shortcut of adding a accessor (private) in front of the name of the argument
  // to instantly create a property with the same name and bind the value to it
  // Adding a type assignment is not optional - type has to be the class you want to get injected
  constructor(private loggingService: LoggingService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}
