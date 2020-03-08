import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { getInheritedFactory } from '@angular/core/src/render3';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  public BASE_API = 'https://k2rp4an93m.execute-api.us-east-1.amazonaws.com/dev';

  public BASE_API2 = 'https://api.ipdata.co/?api-key=22a709359f445ad7e67c396f1003a7329418d08b8006c75e3687f8d1';
  public BASE_API3 = 'http://dataservice.accuweather.com';
  
  public cityName;

  public urlSets = {
    login: 'loginservice',
    // register : 'registerservice',
     items : 'recommend2',
     location : 'locations/v1/cities/autocomplete?apikey=p7GvAhf1b71leAA4nllGmRPRHfzzFEYM&q=',
     temperature1 : 'currentconditions/v1',
     temperature2 : '?apikey=p7GvAhf1b71leAA4nllGmRPRHfzzFEYM'

  };
  dataVariable: any;
  result: any;

  constructor(private http: HttpClient) { }

  // Login Service
  public doLogin(type, request) {
    const url = this.BASE_API + '/' + this.urlSets[type];
    return this.http.post(url, request)
    .pipe(map((response: Response) => response
    ), catchError((e: any) => Observable.throw(this.errorHandler(e))));
  }

  // Base Location Service
  public doLocation() {
    const url = this.BASE_API2;
    return this.http.get(url)
    
  }

  // Current Location Service
  public doLocation1(type) {
    const url = this.BASE_API3 + '/' +this.urlSets[type] + localStorage.getItem("city");
    return this.http.get(url)
    }

  // Temperature Service
  public doLocation2(type1,type2 ) {
    const url = this.BASE_API3 + '/' + this.urlSets[type1]+'/'+localStorage.getItem("key")+this.urlSets[type2];
    return this.http.get(url)
    
  }

 

   
  
  // Item Service
  public  doItems(type, request) {
    const url = this.BASE_API + '/' + this.urlSets[type];
    return this.http.post(url,this.userdata)
   .pipe(map((response: Response) => response
   ), catchError((e: any) => Observable.throw(this.errorHandler(e))));
 }



  public errorHandler(err) {
    alert(err);
  }

  userdata = {
    "Location": localStorage.getItem("city"),
    "FaceImage": localStorage.getItem("imgUrl"),
    "isRegistered" : localStorage.getItem("isUserRegistered"),
    "localTime": localStorage.getItem("time")
    }   
  // public getCity(){
  //   this.BASE_API2
  // }
}

