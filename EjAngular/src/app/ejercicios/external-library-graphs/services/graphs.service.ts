import { delay, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {


  constructor(private http: HttpClient) { }

  getGenresGames() {
    return this.http.get('https://api.rawg.io/api/genres?key=d555b4d3a0c149079d0a1251007247b2');
  }

  getGenresGamesPieGraph() {
    return this.getGenresGames()
        .pipe(
          delay(1500),
          map( data => {
            return Object.values(data)[3];
          })
        );
  }

}
