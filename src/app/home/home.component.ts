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
  selectedOrigin = '';
  selectedDestination = '';
  filteredOriginList = [
    {'origin':''},
  ];

  filteredDestinationList = [
    {'destination':''},
  ];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getAllOrigins().subscribe(data =>{
      this.filteredOriginList = data;
    });

    this.flightService.getAllDestinations().subscribe(data =>{
      this.filteredDestinationList = data;
    });
  }

  query() {
    const origin = this.selectedOrigin;
    const destination = this.selectedDestination;

    this.flightService.getFlights(origin, destination)
      .subscribe(data => this.flights = data);
  }
}
