import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './User';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ArchitectureService {

    private url = 'http://54.38.34.85:3100';
   // private url = 'http://localhost:3100';
   
    private exampleCallUrl = this.url +'/api/ExampleAjaxCall';  // URL to web api

    constructor(private http: HttpClient) { }
    
     
    ExampleAjaxCall(): any  {

        //var req = this.http.post(this.exampleCallUrl, { pseudo: "testpseudo angular" }, httpOptions).subscribe((data: any[]) => {

        //    console.log(data)
           
        //});

       return this.http.post(this.exampleCallUrl, { pseudo: "testpseudo angular" }, httpOptions);
        
    }


    private InscriptionCallUrl = this.url +'/api/InscriptionUser';  // URL to web api
    InscriptionUser(user: User): any {
        return this.http.post(this.InscriptionCallUrl, user, httpOptions);
      
    }


  
 
}
