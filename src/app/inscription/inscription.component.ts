import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ArchitectureService } from '../architecture.service';

import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

    constructor(private architectureService: ArchitectureService, private notifierService: NotifierService ) { }

  ngOnInit() {
  }

  userInscription: User = new User();


  SendInscription(): void {
      this.architectureService.InscriptionUser(this.userInscription).subscribe((data: any) => {

       
          if (!data.success ) {

              for (var i in data.message) {
                  this.notifierService.notify('error', data.message[i]);
              }
             
          }
          else {
              this.notifierService.notify('success', data.message);
          }
       
      });

      debugger;
      
  };

}
