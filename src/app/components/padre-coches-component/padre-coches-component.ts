import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public arrayCoches: Array<Coche>
  constructor() {
    this.arrayCoches = [
      new Coche("Ford", "Mustang", 0, 50),
      new Coche("Kia", "Stonic", 0, 2),
      new Coche("Toyota", "Yaris Verso", 0, 100),
      new Coche("Volkswagen", "Diablo", 0, 75),
    ]
  }
}
