import { Transaccion } from './../../models/transaccion';
import { TransaccionService } from './../../services/transaccion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-transacciones',
  templateUrl: './form-transacciones.component.html',
  styleUrls: ['./form-transacciones.component.css'],
})
export class FormTransaccionesComponent implements OnInit {
  transaccion!: Transaccion;
  divisas!: Array<any>;

  cantOrigen!: number;
  cantDestino!: number;
  divOrigen!: string;
  divDestino!: string;
  tasa!: number;
  email!: string;

  convertir!: boolean;

  constructor(private transaccionService: TransaccionService) {
    this.cantOrigen = 0;
    this.cantDestino = 0;
    this.divOrigen = '';
    this.divDestino = '';
    this.tasa = 0;
    this.email = '';
    this.convertir = false;
    this.divisas = ['usd', 'aud', 'gbp', 'jpy', 'cny', 'aud', 'btc', 'ars'];
  }
  ngOnInit(): void {
  }
  generar() {
    this.convertir = true;
    if (this.cantOrigen != 0 &&  this.tasa != 0 &&  this.divOrigen != '' &&  this.divDestino != '' &&  this.email != '') {
      this.divOrigen = this.divOrigen.toUpperCase()
      this.divDestino = this.divDestino.toUpperCase();
      var total: number;
      var email: number = 0;
      this.transaccionService.getTransaccions().subscribe((res) => {
        total = res.length;
        res.forEach((transaccion: Transaccion) => {
          email++;
        });
        this.tasa = email / total;
      })
      this.transaccionService.getCurrecy(this.divOrigen, this.divDestino, this.cantOrigen).subscribe((res) => {
        this.cantDestino = res.new_amount;
        this.transaccion = new Transaccion(
          this.divOrigen,
          this.divDestino,
          this.cantOrigen,
          this.cantDestino,
          this.tasa,
          this.email
        );
        this.transaccionService.postTransaccion(this.transaccion).subscribe((res) => {
          console.log(res);
        });
      });
    } else {
      console.log("Error de validacion")
    }
  }
}
