import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Comic } from './comic';
import { Chapter } from './chapter';

@Injectable({
  providedIn: 'root'
})

export class ComicService {

  private baseUrl = 'https://komik.ngadep.com';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET comic from the server */
  getComic(name: string): Observable<Comic> {
    const url = `${this.baseUrl}/${name}`;
    
    return this.http.get<Comic>(url)
      .pipe(
        catchError(this.handleError<Comic>(`getHero name=${name}`))
      );
  }
  
  /** GET chapter from the server */
  getChapter(comic: string, chapter: string): Observable<Chapter> {
    const url = `${this.baseUrl}/${comic}/${chapter}`;
    
    return this.http.get<Chapter>(url)
      .pipe(
        catchError(this.handleError<Chapter>(`getHero name=${name}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
