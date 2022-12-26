import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [
    { id: 1, brandName: 'Toyota', modelName: 'Supra', priceInRub: 800000, photoUrl: "./assets/Supra.jpg" },
    { id: 2, brandName: 'McLaren', modelName: 'Senna', priceInRub: 15000000, photoUrl: "./assets/Mclaren.jpg" },
    { id: 3, brandName: 'Tesla', modelName: 'Roadster', priceInRub: 800000, photoUrl: "./assets/tesla.jpg"  }
  ];

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  getCar(id: number): Observable<Car> {
    return of(this.cars.find(car => car.id === id));
  }

  addCar(car: Car): void {
    this.cars.push(car);
  }
  getLastId() { return this.cars[this.cars.length - 1].id; }
}