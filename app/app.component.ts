import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fake Api Call';
  posts = [];

 
constructor (private dataService : DataService){
  this.dataService.getData().subscribe(data => {
    this.posts = data;
  })
}

 
}
