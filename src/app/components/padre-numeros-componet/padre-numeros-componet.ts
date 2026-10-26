import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-componet.css',
  templateUrl: './padre-numeros-componet.html',
})
export class PadreNumerosComponet {
  public total: number
  public numeros!: any

  constructor() {
    this.total = 0
  }

  generarNumeros(): void {
    this.numeros = []
    this.total = 0
    let aux = []
    for(let i = 0; i <= 3; i++) {
      aux.push(Math.floor(Math.random() * (30 - 1 + 1)))
    }
    this.numeros = aux
    console.log(this.numeros)
  }

  sumar(event: number): void {
    this.total += event
  }
}
