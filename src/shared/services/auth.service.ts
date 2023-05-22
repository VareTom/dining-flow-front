import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../../store';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseRoute: string = environment.serverUrls.host + environment.serverUrls.prefix + environment.serverUrls.auth;

  constructor(
    private store: Store,
    private http: HttpClient
  ) { }

  autoLogin() {
    return this.http.get(`${this.baseRoute}/me`)
      .pipe(
        map((result: any) => {
          if (result) {
            localStorage.setItem('token', result.token);
            const user = new User(result.user);
            this.store.set('connectedUser', user);
            this.store.set('isNavigationBarDisplayed', true);
          }
        })
      )
  }

  login(email: string, password: string) {
    const body = {
      email, password
    }
    return this.http.post(`${this.baseRoute}/login`, body)
      .pipe(
        map((result: any) => {
          if (result) {
            localStorage.setItem('token', result.token);
            const user = new User(result.user);
            this.store.set('connectedUser', user);
            this.store.set('isNavigationBarDisplayed', true);
          }
        })
      )
  }

}
