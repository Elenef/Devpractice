"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
    }
    ReviewService.prototype.postData = function (review) {
        var bodyString = JSON.stringify(review);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(bodyString);
        this.http.post('http://localhost:4334/api/reviews', bodyString, options)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.error(error);
        });
    };
    /*
     postData(obj: Review){
         const body = JSON.stringify(obj);
          
         let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
          
 
 
         return this.http.post('http://localhost:4334/api/reviews', body, { headers: headers })
                         //.map((resp:Response)=>resp.json())
                         .catch((error:any) =>{return Observable.throw(error);});
         
 
     }*/
    ReviewService.prototype.getGreeting = function () {
        // return this.http.get('https://api.vk.com/method/users.get?user_ids=hockey_player01');
        return this.http.get('http://localhost:4334/api/greeting');
        /* return this.http.get('http://localhost:4334/api/greeting')
                        .map((resp:Response)=>resp.json())
                        .catch((error:any) =>{return Observable.throw(error);});*/
    };
    /*
    List(text:string){
        if(text !=""){
            return this.http.get('http://localhost:4334/api/reviews?search='+text);
        }
        return this.http.get('http://localhost:4334/api/reviews');
    }*/
    ReviewService.prototype.List = function () {
        return this.http.get('http://localhost:4334/api/reviews');
    };
    ReviewService.prototype.Search = function (text) {
        if (text != " ")
            return this.http.get('http://localhost:4334/api/reviews?search=' + text);
    };
    ReviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=http.service.js.map