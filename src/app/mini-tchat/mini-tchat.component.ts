import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { TchatData } from '../TchatData';

 
import * as _ from 'underscore';
import * as $ from 'jquery';

import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-mini-tchat',
  templateUrl: './mini-tchat.component.html',
  styleUrls: ['./mini-tchat.component.css']
})
export class MiniTchatComponent implements OnInit {
    
    constructor(private socketService: SocketService, private notifierService: NotifierService ) {
  
    }

    //liste des messages recu du serveur.
    tchatListMessage: TchatData[] = [];


  ngOnInit() {
      
      //subscription à l'evenement recevoir un message 
      this.socketService.getMessages().subscribe((data: TchatData) => {
          
          this.tchatListMessage.push(data); 

          //petit test d'underscore
          const lastItem: TchatData = _.last(this.tchatListMessage); //Using underscore
          var test = $("#MiniTchat");//Using jquery

          debugger;
          this.notifierService.notify('success', 'Message reçu');
         
      });

    
      //$.notify("Il est fortement recommandé de ne pas utiliser internet explorer !", "error");
    
  }


  inputMessage: string;
  Sendmessage(): void {

      var msgToSend = { message: this.inputMessage };

      this.socketService.sendMessage(msgToSend);
      this.inputMessage = "";
      
  };

}
