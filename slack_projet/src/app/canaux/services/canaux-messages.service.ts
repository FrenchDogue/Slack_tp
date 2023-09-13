import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Canal } from 'src/app/core/models/canal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CanauxMessagesService {
  constructor(private http: HttpClient) {}

  configUrl = ' http://localhost:3033/canals';

  public getData(): Observable<Canal[]> {
    return this.http.get<Canal[]>(this.configUrl);
  }


  public addData(canal:Canal): Observable<Canal> {
    return this.http.post<Canal>(this.configUrl, canal);
  }

  
  public getCanalById(id: number): Observable<Canal> {
    return this.http.get<Canal>(`${this.configUrl}/${id}`);
  }


}
