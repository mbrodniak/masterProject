import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Movie} from '../Data/Movie';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http: HttpClient) { }

  get30Data(): Observable<any> {
    return this.http.get('../assets/files/response30.json');
  }

  get200Data(): Observable<any> {
    return this.http.get('../assets/files/response_3_200.json');
  }

  get500Data(): Observable<any> {
    return this.http.get('../assets/files/response_5_500.json');
  }

  get1000Data(): Observable<Movie[]> {
    return this.http.get<Movie[]>('../assets/files/response_2_1000.json');
  }

}
