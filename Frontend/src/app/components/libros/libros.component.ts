import { LibroService } from './../../services/libro.service';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  posicion!: number;
  libros!: Array<Libro>;
  libro!: Libro;
  constructor(private libroService: LibroService) {
    this.posicion = 0;
    this.obtenerLibrosDestacados();
  }

  ngOnInit(): void {}

  obtenerLibrosDestacados() {
    this.libros= new Array<Libro>();
    this.libro = new Libro();
    this.libroService.filterByDestacados().subscribe((res: Array<Libro>) => {
      Object.assign(this.libros, res)
      Object.assign(this.libro,res[this.posicion])
    })
  }

  siguiente() {
    if (this.posicion < this.libros.length - 1) {
      this.posicion++;
      this.libro = this.libros[this.posicion];
    } else {
      this.posicion = 0;
      this.libro = this.libros[this.posicion];
    }
  }

  anterior() {
    if (this.posicion > 0) {
      this.posicion--;
      this.libro = this.libros[this.posicion];
    } else {
      this.posicion = this.libros.length-1;
      this.libro = this.libros[this.posicion];
    }
  }
}
