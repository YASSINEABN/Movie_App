import { Component, Injector, OnInit } from '@angular/core';
import axios from 'axios';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  implements OnInit {

  constructor(private injector: Injector) { }

  inputValue: string = '';
  array: any [] = [];
  async fetchData() {
    const options = {
      method: 'GET',
      url: 'https://movies-api14.p.rapidapi.com/movies',
      headers: {
        'X-RapidAPI-Key': 'da65b45924mshae583402eaa7203p14b4c7jsnbbc9f0133ea1',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data);
      this.array = response.data.movies;
      console.log(this.array);
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
    this.fetchData();
    
  }
  moredetails(movie: any) {
      const movieService = this.injector.get(MovieService);
      movieService.setSelectedMovie(movie);
  }
 
  
}
