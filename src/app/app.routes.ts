import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('././pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.page').then(m => m.LoginPage)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/auth/register/register.page').then( m => m.RegisterPage)
      },
      {
        path: '',
        loadComponent: () => import('././pages/auth/auth.page').then(m => m.AuthPage)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }
];
