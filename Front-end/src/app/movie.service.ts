import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }
  selectedMovie: any;

  setSelectedMovie(movie: any) {
    this.selectedMovie = movie;
  }
}
