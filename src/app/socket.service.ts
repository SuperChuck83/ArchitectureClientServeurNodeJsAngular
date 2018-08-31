import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { User } from './User';

import { NotifierService } from 'angular-notifier'; //notification 

@Injectable({
  providedIn: 'root'
})
export class SocketService {

   
    //private url = 'http://localhost:3100';
    private url = 'http://54.38.34.85:3100';
    private socket;    

    constructor(private notifierService: NotifierService) { 
        this.socket = io(this.url);

        this.socket.on('ErreurServeur', function (message) { notifierService.notify('error', message); });
      
    }

    /******  Mini tchat socket event *******/
    //envoyer un message dans le tchat 
    public sendMessage(message) {
        this.socket.emit('TchatRecoisMessage', message);
    }


    //Recevoir un message du serveur pour le tchat 
    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('TchatEnvoisMessage', (messageData) => {
                observer.next(messageData);
            });
        }); 
    }
   /******  FIN Mini tchat socket event *******/


    /******  Connexion socket event *******/

     //envoyer un test de connection
    public TestConnection(user : User) {
        this.socket.emit('TestConnection', user);
    }


    //Recevoir le fait que la connection est authorizé ! 
    public getAuthorisationConnexion = () => {
        return Observable.create((observer) => {
            this.socket.on('ConnectionDone', (data : any) => {
                observer.next(data);
            });
        });
    }

    /****** FIN Connexion socket event *******/
    

}
