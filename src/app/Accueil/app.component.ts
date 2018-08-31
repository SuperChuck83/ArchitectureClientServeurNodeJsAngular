import { Component } from '@angular/core';
import { SocketService } from '../socket.service';

import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'AccueilComponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //'../../../node_modules/angular-notifier/styles.css'
})


export class AppComponent {
    title = 'Architecture Angular  ';
    constructor(private socketService: SocketService) { }
 
}
