import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetterClient {
  private http = inject(HttpClient);
  private base = 'https://api.themoviedb.org/3';
  private fetch_options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTcwMzdlNzI5ZWZlMTVmN2RiMzg0MTgyZDk5NjY3YiIsIm5iZiI6MTc1NzE1ODcxNC44OTkwMDAyLCJzdWIiOiI2OGJjMWQzYTUzODUwMTQ1MWI0ZTVhMDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pdeAI0b67FCNnGHd7BFdpjphJQIJN1cfJ07Kkq8lznI'
    }
  };
  private getFilmographyPath(id:string):string {
    return `${this.base}/person/${id}/movie_credits`;
  };
  private getCreditsPath(id:string):string {
    return `${this.base}/movie/${id}/credits`;
  };
  private getCategoryPath(id:string, page:number = 1):string {
    return `${this.base}/discover/movie?with_genres=${id}&page=${page}&region=GB&sort_by=popularity.desc&with_release_type=2%7C3`
  };
  private getNowPlayingPath(page:number = 1):string {
    return `${this.base}/movie/now_playing?page=${page}&region=GB`;
  };
  private getComingSoonPath(page:number = 1):string {
    return `${this.base}/movie/upcoming?page=${page}&region=GB`;
  };
  private getRecommendationsPath(id:string, page:number = 1):string {
    return `${this.base}/movie/${id}/recommendations?page=${page}&region=GB`;
  };
  private getGenresPath():string {
    return `${this.base}/genre/movie/list`;
  };
  private getFilmPath(id:string):string {
    return `${this.base}/movie/${id}`;
  };
  private getPersonPath(id:string):string {
    return `${this.base}/person/${id}`;
  };
  private getMovieResultsPath(query:string):string {
    return `${this.base}/search/movie?query=${query}`;
  };
  private getPeopleResultsPath(query:string):string {
    return `${this.base}/search/person?query=${query}`;
  };
  private getFilmsPath(type:string, page:number, id:string):string {
    switch(type) {
      case 'recs':
        return this.getRecommendationsPath(id, page);
      case 'genre':
        return this.getCategoryPath(id, page);
      case 'playing':
        return this.getNowPlayingPath(page);
      case 'coming':
        return this.getComingSoonPath(page);
    };
    return '';
  };
  getFilm(id:string) {
    return this.http.get(this.getFilmPath(id), this.fetch_options);
  };
  getPerson(id:string) {
    return this.http.get(this.getPersonPath(id), this.fetch_options);
  };
  getCredits(id:string) {
    return this.http.get(this.getCreditsPath(id), this.fetch_options);
  };
  getCategory(id:string) {
    return this.http.get(this.getCategoryPath(id), this.fetch_options);
  };
  getComingSoon() {
    return this.http.get(this.getComingSoonPath(), this.fetch_options);
  };
  getFilms(type:string, page:number, id:string) {
    return this.http.get(this.getFilmsPath(type, page, id), this.fetch_options);
  };
  getFilmography(id:string) {
    return this.http.get(this.getFilmographyPath(id), this.fetch_options);
  };
  getNowPlaying() {
    return this.http.get(this.getNowPlayingPath(), this.fetch_options);
  };
  getRecommendations(id:string) {
    return this.http.get(this.getRecommendationsPath(id), this.fetch_options);
  };
  getGenres() {
    return this.http.get(this.getGenresPath(), this.fetch_options);
  };
  getMovieResults(query:string) {
    return this.http.get(this.getMovieResultsPath(query), this.fetch_options);
  };
  getPeopleResults(query:string) {
    return this.http.get(this.getPeopleResultsPath(query), this.fetch_options);
  };
}
