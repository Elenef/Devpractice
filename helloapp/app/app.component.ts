import { Component, OnInit} from '@angular/core';
import { ReviewService} from './http.service';



@Component({
    selector: 'my-app',
     template: `<div>    
                  
                    <router-outlet></router-outlet>
               </div>                   
               ` ,
                   
   providers: [ReviewService]
})
export class AppComponent{ }