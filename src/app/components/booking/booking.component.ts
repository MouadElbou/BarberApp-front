import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { BookingService } from '../../services/booking.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzStepsModule,
    NzCardModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    HttpClientModule
  ], 
   providers: [BookingService]

})

export class BookingComponent {
  current = 0;
  serviceForm: FormGroup;
  personalForm: FormGroup;
  
  timeSlots: string[] = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  services = [
    { id: 1, name: 'Classic Haircut', duration: '30 min', price: '$30' },
    { id: 2, name: 'Beard Trim', duration: '20 min', price: '$20' },
    { id: 3, name: 'Hair & Beard Combo', duration: '45 min', price: '$45' },
    { id: 4, name: 'Hot Towel Shave', duration: '30 min', price: '$35' },
    { id: 5, name: 'Kids Haircut', duration: '20 min', price: '$25' }
  ];

  barbers = [
    { id: 1, name: 'John Smith', speciality: 'Classic Cuts' },
    { id: 2, name: 'Mike Johnson', speciality: 'Modern Styles' },
    { id: 3, name: 'David Wilson', speciality: 'Beard Grooming' }
  ];


  constructor(private readonly fb: FormBuilder, private bookingService: BookingService, private router: Router) {
    this.serviceForm = this.fb.group({
      service: ['', [Validators.required]],
      barber: ['', [Validators.required]],
      date: ['', [Validators.required]],
      timeSlot: ['', [Validators.required]]
    });

    this.personalForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],


      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}')]]
    });
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }












  onSubmit() {
    if (this.serviceForm.valid && this.personalForm.valid) {
      const bookingData = {
        service: String(this.serviceForm.get('service')?.value),
        barber: String(this.serviceForm.get('barber')?.value),
        date: new Date(this.serviceForm.get('date')?.value).toISOString(),
        timeSlot: this.serviceForm.get('timeSlot')?.value,
        customerName: this.personalForm.get('name')?.value,
        customerEmail: this.personalForm.get('email')?.value,
        customerPhone: this.personalForm.get('phone')?.value
      };
























      this.bookingService.createBooking(bookingData).subscribe({
        next: (response) => {
          this.router.navigate(['/thank-you'], { 
            state: { 
              bookingDate: bookingData.date,
              bookingTime: bookingData.timeSlot 
            }
          });
        },
        error: (error) => console.log('Error:', error)
      });
    }
  }
}