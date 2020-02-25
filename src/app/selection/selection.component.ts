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

  getThirty() {
    this.dataService.get30Data().subscribe(data => this.movies = data);
  }

  getTwoHundred() {
    this.dataService.get200Data().subscribe(data => this.movies = data);
  }

  getFiveHundred() {
    this.dataService.get500Data().subscribe(data => this.movies = data);
  }

  getThousand() {
    this.dataService.get1000Data().subscribe(data => this.movies = data);
  }

  postMovie() {
    const movie = new Movie();
    movie.imdbId = 'tt99999';
    movie.ratings = 10000;
    movie.votesNumber = 10000;
    movie.titleType = 'Sample';
    movie.primaryTitle = 'Sample Movie';
    movie.originalTitle = 'Sample Movie';
    movie.startYear = 2020;
    movie.runtimeMinutes = 1;
    movie.genere1 = 'sample';
    movie.genere2 = 'sample';
    movie.adult = false;

    console.log(movie);

    this.dataService.addData(movie).subscribe(data => console.log(data));
  }

  // updateMovie() {
  //   const movie = new Movie();
  //   movie.imdbId = 'tt0010323';
  //   movie.ratings = 81;
  //   movie.votesNumber = 10005;
  //   movie.titleType = 'Sample';
  //   movie.primaryTitle = 'Sample Movie';
  //   movie.originalTitle = 'Sample Movie';
  //   movie.startYear = 2020;
  //   movie.runtimeMinutes = 1;
  //   movie.genere1 = 'sample';
  //   movie.genere2 = 'sample';
  //   movie.adult = false;
  // }

  showArray() {
    this.movies.forEach(movie => console.log(movie));
  }

}
