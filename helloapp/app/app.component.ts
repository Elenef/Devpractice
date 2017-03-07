import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { User} from './user';
import { HttpService} from './http.service';


  
@Component({
    selector: 'my-app',
    template: `<div>{{greeting}}</div>`,
    
   /* template: `<div><p>Имя пользователя: {{greeting?.uid}}</p>
                    <p>Имя пользователя: {{greeting?.first_name}}</p>
                    <p>Имя пользователя: {{greeting?.last_name}}</p>
                    </div>`,*/
    
    providers: [HttpService]
})
export class AppComponent implements OnInit{ 
  
    greeting: string;
    constructor(private httpService: HttpService){}
    
    ngOnInit(){
        this.httpService.getGreeting()
                .subscribe(data => this.greeting=data);
    }
}