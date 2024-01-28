import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
import { PageDetailsComponent } from './page-details/page-details.component';


const routes: Routes = [
  
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path:'movies',component: MovieComponent},
  {path:'search/:query',component:SearchmoviesComponent },
  {path:'pagedetails/:query',component:PageDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
