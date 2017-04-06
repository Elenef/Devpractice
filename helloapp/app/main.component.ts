import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { Welcome} from './greeting';
import { Review} from './review';
import { ReviewService} from './http.service';
import {Router, ActivatedRoute} from '@angular/router';
import { ListComponent} from './list.component';



  
@Component({
    selector: 'my-app',
    templateUrl: 'app/main.component.html',
    styleUrls: ['app/main.component.css'],
                   
    /*   template: `<ul>
                    <li *ngFor="let user of users">
                     <p>id пользователя: {{user?.uid}}</p>
                    <p>Имя пользователя: {{user?.first_name}}</p>
                    <p>Фамилия пользователя: {{user?.last_name}}</p>
                    </li>
                </ul>`, 
                
            <form-app>{{greeting?.text}}</form-app>       
                
                 */

   providers: [ReviewService]
})



export class MainComponent implements OnInit{ 
    
    greeting: Welcome;
    review: Review=new Review(); 
    

    constructor(private httpService: ReviewService, private router: Router, private route: ActivatedRoute){}
     
    submit(review){
        console.log(review);
        this.httpService.postData(review);
        this.router.navigate(['/list'], { relativeTo: this.route}); 
       
    }
    



    ngOnInit(){     
             this.httpService.getGreeting()
            .subscribe((resp:Response) => {
                let list = resp.json();
                this.greeting = ({text:list[0].greeting});               
            });
         

         /*this.httpService.getGreeting()
                .subscribe(data => this.greeting=data);*/
                 
       /*
             console.log(this.httpService.getGreeting());
             this.httpService.getGreeting()
            .subscribe((resp:Response) => {
                let usersList = resp.json().response;
                for(let index in usersList){
                    console.log(usersList[index]);
                    let user = usersList[index];
                    this.users.push({uid:user.uid,first_name: user.first_name, last_name: user.last_name});
                }
            });*/
    }
}