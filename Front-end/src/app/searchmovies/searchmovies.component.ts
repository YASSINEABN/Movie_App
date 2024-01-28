import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit{
  query: string;
  array: any [] = [];
  inputValue : string = "";
  constructor(private activatedRoute: ActivatedRoute,private injector: Injector) {
    this.query = '';  
  }

  ngOnInit(): void {
   
    this.activatedRoute.paramMap.subscribe(params => {
      this.query = params.get('query') || '';
      console.log(this.query);
      this.fetchData();
    });
  }
  async fetchData()
  {
    const options= {
      method: 'GET',
      url:'https://movies-api14.p.rapidapi.com/search',
      params:{
        query: this.query
      },
      headers: {
        'X-RapidAPI-Key': 'da65b45924mshae583402eaa7203p14b4c7jsnbbc9f0133ea1',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    };
    try {
        const response = await axios.request(options);
        this.array = response.data.contents;
        console.log(this.array);
    } catch (error) {
      console.log(error);
    }
  }
  moredetails(movie: any) {
    const movieService = this.injector.get(MovieService);
    movieService.setSelectedMovie(movie);
}
   
}
