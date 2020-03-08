import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForUserService {

   constructor(private http: HttpClient, ) { }

  public userRegistration(userdata) {
    userdata.isRegistered = true;
    return this.http.post<any>('https://k2rp4an93m.execute-api.us-east-1.amazonaws.com/dev/registerservice', userdata).pipe(map(res => res), catchError(this.handleError));
  }

  public userAnalyzeface (userdata) {

    userdata.isRegistered = false;
  
     return this.http.post<any>('https://k2rp4an93m.execute-api.us-east-1.amazonaws.com/dev/analyzeface', userdata).pipe(map(res => res.data), catchError(this.handleError));

  }
  public userLogin (userdata) {
    console.log("API success");
    userdata.isRegistered = false;
    return this.http.post<any>('https://k2rp4an93m.execute-api.us-east-1.amazonaws.com/dev/loginservice', userdata).pipe(map(res => res), catchError(this.handleError));

 }


  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(
      'Something bad happened; please try again later.');
  };



  
   
}
