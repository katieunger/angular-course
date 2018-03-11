import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.errorMessage = this.route.snapshot.data['message'];
    // Subscribing to data observable (in case the data could change while on the page)
    this.route.data.subscribe(
      // Dummy Data type imported from Angular router
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }

}
