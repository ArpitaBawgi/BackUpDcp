import { Injectable } from '@angular/core';
import { Http,Response,HttpModule, RequestOptions, Headers, } from '@angular/http';
import { HttpClientModule,HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';  
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';   

@Injectable()
export class OrderService {

   constructor(public http: HttpClient) { }

   public placeOrder(orderData) {
        console.log("From placeOrder Service.........");
        console.log(orderData);
        console.log("From placeOrder Service.........");    
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };  
            
            return this.http.post('https://k2rp4an93m.execute-api.us-east-1.amazonaws.com/dev/order',orderData,httpOptions)
            .pipe(map((response: Response) => response
            ), catchError((e: any) => Observable.throw(this.errorHandler(e)))); 
   } 
  
   
 
   errorHandler(error: any): void {
    console.log(error)
   }

}
