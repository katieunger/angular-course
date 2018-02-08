import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // The relative path works here because the navigate method does not know what the currently loaded route is, so it does not try to navigate to /servers/servers.
    // To tell the navigate method the current route, we pass this as a second argument, an object.
    // By default the relativeTo property is the root domain.
    // Here we pass it the current route using the ActivatedRoute we have injected which holds metadata about the current route

    // this.router.navigate(['servers'],{relativeTo: this.route});
  }

}
