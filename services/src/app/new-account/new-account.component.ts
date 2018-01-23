import { Component } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // Need to provide a service to tell Angular how to create instance of our service
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {

  // Informing Angular that we require an instance of the logging service
  // Binding the instance to a property
  // Using TypeScript shortcut of adding a accessor (private) in front of the name of the argument
  // to instantly create a property with the same name and bind the value to it
  // Adding a type assignment is not optional - type has to be the class you want to get injected
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
