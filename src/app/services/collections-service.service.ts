import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collect } from '../interfaces/collect';

@Injectable({
  providedIn: 'root'
})
export class CollectionsServiceService {

  private apiUrl = 'http://localhost:8081/collections';

  constructor(private http: HttpClient) {}

  getCollections(): Observable<Collect[]> {
    return this.http.get<Collect[]>(this.apiUrl);
  }
}
