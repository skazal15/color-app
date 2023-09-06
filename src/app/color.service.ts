import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'
import { ColorResponse } from './color/interface/color.interface';

@Injectable({
  providedIn: 'root'
})

export class ColorService {
  private apiUrl = 'http://localhost:3000/color'; // Adjust the URL as needed.

  constructor(private http: HttpClient) {}

  getRandomColor(): Observable<ColorResponse> {
    return interval(2000).pipe(
      switchMap(() => this.http.get<ColorResponse>(this.apiUrl))
    );
  }
}
