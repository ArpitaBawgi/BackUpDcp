import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {


  
  constructor( private http: HttpClient, ) { }
  public SaveFilter(filterdata) {
    return this.http.post<any>('http://iot.digitalcloudplatform.com:8080/saveFilter/', filterdata).pipe(map(res => res), catchError(this.handleError));
    
  }

  public getModels() {
    return this.http.get<any>('http://iot.digitalcloudplatform.com:8080/loadComponent/2011-09-01/2019-05-09').pipe(map(res => res), catchError(this.handleError));
    
  }
  public getfiltersdata () {
    console.log(this.http.get('http://iot.digitalcloudplatform.com:8080/getFilters'));
    return this.http.get('http://iot.digitalcloudplatform.com:8080/getFilters');
    
  };

  public UpdateFilter(filterdata) {
    return this.http.post<any>('http://iot.digitalcloudplatform.com:8080/updateFilter/', filterdata).pipe(map(res => res), catchError(this.handleError));
    
  }
  // let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
  //   let options = new RequestOptions({ headers: headers });



  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(
      'Something bad happened; please try again later.');
  };

}
