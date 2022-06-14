import { LibroService } from './../../services/libro.service';
import { Libro } from './../../models/libro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css'],
})
export class FormLibroComponent implements OnInit {
  valido!: boolean;
  libro!: Libro;
  desactivar!: string;
  constructor(private libroService: LibroService) {
    this.libro = new Libro();
    this.valido = false;
    this.desactivar = 'diable';
  }

  ngOnInit(): void {
    this.verificarValidez(this.libro);
  }

  crearLibro(libro: Libro) {
    this.libroService.createLibro(libro).subscribe((res) => {
      console.log(res.msg);
    });
  }

  verificarValidez(libro: Libro) {
    if (
      libro.titulo !== '' &&
      libro.descripcion !== '' &&
      libro.imagen !== '' &&
      libro.stock !== 0
    )
      this.valido = true;
    else this.valido = false;
  }
}
