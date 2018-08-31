import { Component, OnInit } from '@angular/core';
import { Personne } from '../Personne';
import { ArchitectureService } from '../architecture.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit {

    constructor(private architectureService: ArchitectureService, private notifierService: NotifierService ) { }
   
   

   
    testClick(): void {

        //var xqhr =
        var test = "";
        this.architectureService.ExampleAjaxCall().subscribe((data: Personne) => {

            console.log(data.pseudo);
            
            this.notifierService.notify('success', data.pseudo);
        });


        //xqhr.subscribe(function (result) {
        //    debugger;
        //    alert("hellodddd")
        //} ());
      
        //alert(xqhr);
       

    };



  ngOnInit() {

  }

}
