import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Movie} from '../../Data/Movie';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  movies: Movie[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getTenPerTenTable() {
    // let endTime = 0;
    this.movies = [];
    const startTime = new Date().getMilliseconds();
    this.dataService.getData().subscribe(data =>
      this.movies = data,
    error1 => {},
      () => {
        const endTime = new Date().getMilliseconds();
        console.log(endTime - startTime);
      });
  }

  getTwentyPerTenTable() {

  }

  showArray() {
    this.movies.forEach(movie => console.log(movie));
  }

}
