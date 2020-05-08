import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'masterProject';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToFirstPage() {
    this.router.navigate(['/selection']);
  }

  redirectToMisiaPage() {
    this.router.navigate(['/stronaMisi']);
  }

}
