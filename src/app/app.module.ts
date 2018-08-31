import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { webSocket } from 'rxjs/webSocket'; //<-- web socket


import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './Accueil/app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MiniTchatComponent } from './mini-tchat/mini-tchat.component';

import { NotifierModule } from 'angular-notifier';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
      MiniTchatComponent,
      InscriptionComponent,
      ConnexionComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      NotifierModule.withConfig({
          position :{
              horizontal:{
                  position : 'right',
              },
              vertical : {
                  position: 'top',
              }
              
          }

      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
