import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzCarouselModule
  ]
})
export class HomeComponent {
  features = [
    {
      title: 'Expert Barbers',
      description: 'Our skilled team brings years of experience and passion',
      icon: 'user'
    },
    {
      title: 'Modern Equipment',
      description: 'Top-quality tools for the perfect cut every time',
      icon: 'scissor'
    },
    {
      title: 'Clean Environment',
      description: 'Hygienic and comfortable atmosphere for your comfort',
      icon: 'check-circle'
    }
  ];
}