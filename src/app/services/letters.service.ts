import { Injectable } from '@angular/core';
import { Letter } from '../letter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  private lettersUrl = `${environment.apiUrl}/letters`;

  constructor(
    private http: HttpClient
  ) { }

  getLetters(): Observable<Letter[]> {
    return this.http.get<Letter[]>(this.lettersUrl)
      .pipe(
        tap(_ => console.log('fetched letters')),
        catchError(this.handleError<Letter[]>('getLetters', []))
      );
  }

  postLetter(letter: Letter): Observable<Letter> {
    return this.http.post<Letter>(this.lettersUrl, letter)
      .pipe(
        tap(_ => console.log('letter posted')),
        catchError(this.handleError<Letter>('postLetter'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
   
      return of(result as T);
    };
  }

}
