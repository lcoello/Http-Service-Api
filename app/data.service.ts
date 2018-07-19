import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post';

@Injectable()
export class DataService {

  constructor(private http: HttpClient ) { }



getData(){
  return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts') 
  
}
}
