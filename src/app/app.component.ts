import { Component, NgZone } from '@angular/core';
import { Bootstrap } from '../bootstrap.singleton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = Math.random().toString(36).substring(7);

  constructor(private zone: NgZone) { }


  restart() {
    this.zone.runOutsideAngular(_ => {
     Bootstrap.Instance.restart();
    });
  }
}
