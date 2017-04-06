import { Component, OnInit} from '@angular/core';
import { Response} from '@angular/http';
import { Review} from './review';
import { Search} from './search';
import { ReviewService} from './http.service';
  
@Component({
    selector: 'list-app', 
    templateUrl: 'app/list.component.html',
    styleUrls: ['app/list.component.css'],


    providers: [ReviewService]
  
})
export class ListComponent implements OnInit{ 
     search : string;
     reviews: Review[] = [];

    constructor(private httpService:  ReviewService){}

     ngOnInit(){
         this.httpService.List()
                        .subscribe((data: Response) => this.reviews=data.json());                    
    }

   
     onKey(event: any) { 
         
      console.log(event.target.value+"");
      this.httpService.Search(event.target.value+"").subscribe((data: Response) => {this.reviews=data.json(); });
  }
}