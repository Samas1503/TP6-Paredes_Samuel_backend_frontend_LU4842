import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
})
export class TransaccionesComponent implements OnInit {
  transacciones!: Array<Transaccion>;
  transaccion!: Transaccion;
  divisas!: Array<any>;

  origen!: string;
  destino!: string;

  constructor(private transaccionService: TransaccionService) {
    this.obtenerTransacciones();
    this.divisas = ['usd', 'aud', 'gbp', 'jpy', 'cny', 'aud', 'btc', 'ars'];
    this.origen = '';
    this.destino = '';
  }

  ngOnInit(): void {}

  limpiar() {
    this.obtenerTransacciones();
    this.origen = '';
    this.destino = '';
  }

  imagen(moneda: string) {
    return '../assets/icons/' + moneda.toLowerCase() + '.png';
  }

  filtrarTransacciones(origen: string, destino: string) {
    origen = origen.toUpperCase();
    destino = destino.toUpperCase();
    this.transaccionService
      .filterTransaccionsByDivisas(origen, destino)
      .subscribe((res) => {
        this.transacciones = res;
      });
  }

  obtenerTransacciones() {
    this.transacciones = new Array<Transaccion>();
    this.transaccionService.getTransaccions().subscribe((res) => {
      Object.assign(this.transacciones, res);
    });
  }
}
