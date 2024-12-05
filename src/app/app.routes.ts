import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'booking',
    loadComponent: () => import('./components/booking/booking.component').then(m => m.BookingComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'thank-you',
    loadComponent: () => import('./components/thank-you/thank-you.component')
      .then(m => m.ThankYouComponent)
  },
  {
    path: '**',
    redirectTo: ''
  },
  
];


