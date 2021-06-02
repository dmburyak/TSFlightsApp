import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight.model';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  flightList!: any[];
  origin = '';
  destination = '';
  flightNumber!: number;
  depart!: Date;
  arrive!: Date;
  nonstop = false;

  constructor(private flightService: FlightService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

  toggleNonStop() {
    this.nonstop = !this.nonstop;
  }

  refresh(): void {
    this.flightService.getAllFlights()
      .subscribe(data => {
        this.flightList = data;
        console.log(this.flightList);
      });
  }

  sendFlight() {
    const flight: Flight = {
      origin: this.origin,
      destination: this.destination,
      flightNumber: this.flightNumber,
      depart: this.depart,
      arrive: this.arrive,
      nonstop: this.nonstop
    }
    this.flightService.postFlight(flight)
  }

  update(flight: Flight) {
    this.flightService.updateFlight(flight)
      .subscribe(data => {
        // @ts-ignore
        if (data && data['affected']) {
          this.refresh();
        }
      });
  }

  delete(flight: Flight) {
    if (window.confirm('are you sure you want to delete this flight? ')) {
      this.flightService.deleteFlight(flight.id)
        .subscribe(data => {
          // @ts-ignore
          if (data && data['affected']) {
            this.refresh();
          }
        });
    }
  }

}
