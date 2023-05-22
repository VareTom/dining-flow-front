import { Injectable } from '@angular/core';
import { Store } from 'src/store';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.store.value.connectedUser) {
      return true;
    }
    this.router.navigateByUrl('auth');
    return false;
  }
}
