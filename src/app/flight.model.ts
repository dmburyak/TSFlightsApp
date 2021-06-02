export interface Flight {
  id?: string;
  origin: string;
  destination: string;
  flightNumber: number;
  depart: Date | string;
  arrive: Date | string;
  nonstop: boolean;
}
