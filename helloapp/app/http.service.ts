import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response,Headers,URLSearchParams,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Component, OnInit} from '@angular/core';
import { Review} from './review';
import { Welcome} from './greeting';
import { Search} from './search';


 
@Injectable()
export class ReviewService{
 
    constructor(private http: Http){ }
    
    
     postData (review: Review) {
        
        let bodyString = JSON.stringify(review); 
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
        let options       = new RequestOptions({ headers: headers}); 

        console.log(bodyString);

        this.http.post('http://localhost:4334/api/reviews', bodyString, options) 
                         .subscribe(res => {
                       console.log(res);
                   }, error => {
                       console.error(error);
                   });
                      
    }   



   

   /*
    postData(obj: Review){
        const body = JSON.stringify(obj);
         
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
         


        return this.http.post('http://localhost:4334/api/reviews', body, { headers: headers })
                        //.map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);}); 
        

    }*/


    getGreeting(){

        // return this.http.get('https://api.vk.com/method/users.get?user_ids=hockey_player01');
        
          return this.http.get('http://localhost:4334/api/greeting');
                        
        /* return this.http.get('http://localhost:4334/api/greeting')
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);});*/
    }
    /*
    List(text:string){
        if(text !=""){
            return this.http.get('http://localhost:4334/api/reviews?search='+text);
        }
        return this.http.get('http://localhost:4334/api/reviews');
    }*/


    List(){
        return this.http.get('http://localhost:4334/api/reviews');
       
    }
    
    Search(text:string){
        if(text !=" ")
            return this.http.get('http://localhost:4334/api/reviews?search='+text);  
    }



}