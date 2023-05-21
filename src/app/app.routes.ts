import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('././pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'favorites',
        loadComponent: () => import('./pages/favorites/favorites.page').then( m => m.FavoritesPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'family',
        loadComponent: () => import('./pages/family/family.page').then( m => m.FamilyPage)
      },
      {
        path: 'restaurant-form',
        loadComponent: () => import('./pages/restaurant-form/restaurant-form.page').then( m => m.RestaurantFormPage)
      }
    ]
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
