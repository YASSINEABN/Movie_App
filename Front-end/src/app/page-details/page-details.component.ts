import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent {
  selectedMovie: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.selectedMovie = this.movieService.selectedMovie;
  }
}
