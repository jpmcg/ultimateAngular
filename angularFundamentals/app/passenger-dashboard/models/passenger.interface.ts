export interface Child {
  name: string;
  age: number;
}

export interface Passenger {
  id: number,
  name: string,
  checkedIn: boolean,
  checkedInDate?: number
  baggage: string
}
