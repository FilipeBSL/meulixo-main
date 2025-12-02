import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login-user', pathMatch: 'full' },

  {
    path: 'login-user',
    loadComponent: () =>
      import('./login-user/login-user.component').then(r => r.LoginUserComponent)
  },
  {
    path: 'register-user',
    loadComponent: () =>
      import('./register-user/register-user.component').then(r => r.RegisterUserComponent)
  },
  {
    path: 'collect-info',
    loadComponent: () =>
      import('./collections-info/collections-info.component').then(m => m.CollectionsInfoComponent)
  },


  { path: '**', redirectTo: 'login-user' }
];
