import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { NotifierService } from 'angular-notifier';
import { User } from '../User';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

    constructor(private socketService: SocketService, private notifierService: NotifierService ) { }

    ngOnInit() {


        //subscription à l'evenement d'authorization connection 
        this.socketService.getAuthorisationConnexion().subscribe((data: any) => {
            
            this.notifierService.notify('success', 'Connection authorizé ! ');

        });

  }


  userConnexion: User = new User();

  SendConnexion(): void {
      
      this.socketService.TestConnection(this.userConnexion);

  };

}
