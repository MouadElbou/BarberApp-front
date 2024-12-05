import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzCardModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule
  ]
})
export class ServicesComponent {
  services = [
    {
      name: 'Classic Haircut',
      description: 'Traditional haircut with modern styling techniques',
      price: '$30',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a'
    },
    {
      name: 'Beard Trim',
      description: 'Professional beard shaping and maintenance',
      price: '$20',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033'
    },
    {
      name: 'Hair & Beard Combo',
      description: 'Complete grooming package for hair and beard',
      price: '$45',
      duration: '45 min',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1'
    },
    {
      name: 'Hot Towel Shave',
      description: 'Luxurious traditional straight razor shave',
      price: '$35',
      duration: '30 min',
      image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70'
    },
    {
      name: 'Kids Haircut',
      description: 'Gentle and patient service for our younger clients',
      price: '$25',
      duration: '20 min',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a'
    }
  ];
}