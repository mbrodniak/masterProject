import {AfterContentChecked, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from '../data.service';
import {Movie} from '../../Data/Movie';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {computeStyle} from '@angular/animations/browser/src/util';

const subs = new Subscription();

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})



export class SelectionComponent implements OnInit, OnChanges, OnDestroy, AfterViewChecked, DoCheck, AfterContentChecked {

  movies: Movie[];
  zero = 0;
  form;
  constructor(private dataService: DataService,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
        imdbId: '',
        titleType: '',
        primaryTitle: '',
        originalTitle: '',
        startYear: '',
        runtimeMinutes: '',
        genere1: ''
      }
    );
  }
  ngOnInit() {
    console.log('NgOnInit');
  }

  getMoviesFromService() {
    this.dataService.data.subscribe(data => {
      this.movies = data;
    },
      () => {},
      () => {
        window.prompt('Selected: ' + this.movies.length + ' movies.');
      });
  }

  goToSelectedPage() {
    this.router.navigate(['/selected']);
  }

  getThirtyMovies() {
    this.dataService.download30Movies().subscribe(data => {
      this.movies = data;
    });
  }

  getTwoHundred() {
    this.dataService.download200Movies().subscribe(data => {
      this.movies = data;
    });
  }

  getFiveHundred() {
    this.dataService.download500Movies().subscribe(data => {
      this.movies = data;
    });
  }
  getThousandMovies() {
    this.dataService.download1000Movies().subscribe(data => {
      this.movies = data;
    });
  }

  changeDateView() {
    const y = document.getElementById('table');
    const x = y.getElementsByTagName('tr');
    for (let i = 0; i < x.length; i++) {
      x[i].getElementsByTagName('td').namedItem('date').innerText = '1999';
    }
  }

  addColumn() {
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
    this.movies.push(movie);
    // alert(this.movies.length);
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

    // this.dataService.addData(movie).subscribe(data => console.log(data));
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
    // this.dataService.getSizes();
  }

  ngOnDestroy(): void {
    console.log('OnDestroy!');
    subs.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes!');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked! ' + new Date().getTime());
  }

  ngDoCheck(): void {
    // console.log("")
    console.log('DoCheck ' + new Date().getTime());
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked ' + new Date().getTime());
  }


  onSubmit(value: any) {
    console.log(this.movies.length);
    this.movies.push(value);
    console.log(this.movies.length);
  }
}
