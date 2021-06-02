import { Injectable } from '@angular/core';
import { Flight } from './flight.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FlightService {

  flights: Flight[] = [];
  backEndUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getFlights(orig: string, dest: string): Observable<any> {
    return this.http.get(`${this.backEndUrl}/flights/query/${orig}/${dest}`);
  }

  getAllOrigins(): Observable<any> {
    return this.http.get(`${this.backEndUrl}/flights/cities/origins`)
  }
  getAllDestinations(): Observable<any> {
    return this.http.get(`${this.backEndUrl}/flights/cities/destinations`)
  }

  postFlight(flight: Flight) {
    return this.http.post(`${this.backEndUrl}/flights`, flight)
      .subscribe(data => console.log('data posted to server!'))
  }

  updateFlight(flight: Flight) {
    return this.http.patch(`${this.backEndUrl}/flights/${flight.id}/update`,flight);
  }

  deleteFlight(id: string | undefined) {
    return this.http.delete(`${this.backEndUrl}/flights/${id}/delete`);
  }

  getAllFlights(): Observable<any> {
    return this.http.get(`${this.backEndUrl}/flights`);
  }
}

