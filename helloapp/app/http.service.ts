import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Component, OnInit} from '@angular/core';
import { User} from './user';

 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
   
    getGreeting(){
         return this.http.get('http://localhost:4334/api/greeting')
        //return this.http.get('https://api.vk.com/method/users.get?user_ids=hockey_player01')
                        .map((resp:Response)=>resp.json())
                        //.map(res => <Response[]>res.json().data as User[])
                        .catch((error:any) =>{return Observable.throw(error);});
    }
}