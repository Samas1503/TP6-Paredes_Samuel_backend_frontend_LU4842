export class Transaccion {
  _id!: string;
  monedaOrigen!: string;
  cantidadOrigen!: number;
  monedaDestino!: string;
  cantidadDestino!: number;
  emailCliente!: string;
  tasaConversion!: number;
  constructor(monedaOrigen: string, monedaDestino: string, cantOrigen: number, cantDestino: number, tasa: number, email: string) {
    this.cantidadOrigen = cantOrigen;
    this.monedaOrigen = monedaOrigen;
    this.cantidadDestino = cantDestino;
    this.monedaDestino = monedaDestino;
    this.tasaConversion = tasa;
    this.emailCliente = email;
  }
}
