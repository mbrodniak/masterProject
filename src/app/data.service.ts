import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../Data/Movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get30Data(): Observable<any> {
    return this.http.get('../assets/files/response30.json');
}

  get200Data(): Observable<any> {
     return this.http.get('../assets/files/response200.json');
  }

  get500Data(): Observable<any> {
     return this.http.get('../assets/files/response500.json');
  }

  get1000Data(): Observable<any> {
     return this.http.get('../assets/files/response1000.json');
  }

  addData(body: Movie): Observable<any> {
    return this.http.post('http://localhost:3000/posts', body);
  }
}
