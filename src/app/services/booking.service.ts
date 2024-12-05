import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingRequest } from '../models/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://localhost:7234/api/booking';

  constructor(private http: HttpClient) {}

  createBooking(bookingData: BookingRequest): Observable<any> {
    const formattedData = {
      ...bookingData,
      date: new Date(bookingData.date).toISOString()
    };
    return this.http.post(this.apiUrl, formattedData);
  }

  getAvailableTimeSlots(date: string, barberId: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/timeslots`, {
      params: { date, barberId }
    });
  }
}