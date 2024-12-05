import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [CommonModule, RouterModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="thank-you-container" [@fadeIn]>
      <div class="check-mark">✓</div>
      <h1>Thank You!</h1>
      <p>Your booking has been confirmed</p>
      <div class="booking-details">
        <p>We'll see you on {{bookingDate | date:'fullDate'}} at {{bookingTime}}</p>
      </div>
      <button routerLink="/" class="home-button">Return to Home</button>
    </div>
  `,
  styles: [`
    .thank-you-container {
      text-align: center;
      padding: 4rem 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .check-mark {
      font-size: 5rem;
      color: #4CAF50;
      margin-bottom: 2rem;
    }
    
    h1 {
      color: #333;
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    .booking-details {
      margin: 2rem 0;
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 8px;
    }
    
    .home-button {
      padding: 1rem 2rem;
      background: #5D4037;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .home-button:hover {
      background: #8D6E63;
    }
  `]
})
export class ThankYouComponent {
  bookingDate = new Date();
  bookingTime = '10:00 AM';
}