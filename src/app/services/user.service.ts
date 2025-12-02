import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { AuthenticationResponse } from '../interfaces/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }


  authenticateUser(email: string, password: string): Observable<AuthenticationResponse> {
    const data = {email, password};

    return this.http.post<AuthenticationResponse>(`${this.apiUrl}/authenticate`, data)
  }


  createUser(email: string, password: string, profile: string): Observable<User> {
    const data = {email, password, profile};

    return this.http.post<User>(`${this.apiUrl}`, data);
  }
}
