import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Flight } from '../flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights!: Flight[];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }

}
