import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './selection/selection.component';
import {DataService} from './data.service';
import { HttpClientModule} from '@angular/common/http';
import { SelectedComponent } from './selected/selected.component';
import {DownloadService} from './download.service';
import { MisiaComponent } from './misia/misia.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'selection', component: SelectionComponent
  },
  {
    path: 'selected', component: SelectedComponent
  },
  {
    path: 'stronaMisi', component: MisiaComponent
  }
];

// const childRoutes: Routes = [
//   {
//     path: 'selection', component: SelectionComponent,
//     children: [
//       {
//         path: 'array',
//         component: SelectedComponent
//       }
//     ]
//   }
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectionComponent,
    SelectedComponent,
    MisiaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    // RouterModule.forChild(childRoutes),
    AlertModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, DownloadService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
