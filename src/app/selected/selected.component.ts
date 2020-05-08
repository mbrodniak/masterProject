import {AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Movie} from '../../Data/Movie';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

declare var $: any;
class Movies {
}

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css'],
  providers: [DataService]
})
export class SelectedComponent implements OnInit, OnChanges, AfterViewChecked {

  private startTime: number;
  private endTime: number;

  movies: Movie[];

  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    console.log('NgOnInit Selected!');
    // this.movies$ = this.dataService.downloadMovies();
    this.dataService.download1000Movies().subscribe(data => {
      this.movies = data;
    });
  }

  getArraySize() {
    console.log(this.movies.length);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(caches);
  }

  ngAfterViewChecked(): void {
    this.endTime = new Date().getMilliseconds();
    // console.log(this.endTime - this.startTime);
  }


}
