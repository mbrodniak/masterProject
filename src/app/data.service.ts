import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Movie} from '../Data/Movie';
import {DownloadService} from './download.service';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class DataService  {

  private dataSource = new BehaviorSubject([]);
  data = this.dataSource.asObservable();

  // movies30: Movie[];

  constructor(private http: HttpClient, private download: DownloadService) { }

  download1000Movies(): Observable<Movie[]> {
    // this.download.get1000Data().subscribe(data => {
    //     console.log(data);
    //     this.movies30 = data;
    //   },
    //   () => {
    //     console.log('error!');
    //   },
    //   () => {
    //     window.alert('Download completed! Size: ' + this.movies30.length);
    //     return this.dataSource.next(this.movies30);
    //   }
    // );
    return this.download.get1000Data();
  }

  download30Movies(): Observable<Movie[]> {
    return this.download.get30Data();
  }

  download200Movies(): Observable<Movie[]> {
    return this.download.get200Data();
  }

  download500Movies(): Observable<Movie[]> {
    return this.download.get500Data();
  }

}
