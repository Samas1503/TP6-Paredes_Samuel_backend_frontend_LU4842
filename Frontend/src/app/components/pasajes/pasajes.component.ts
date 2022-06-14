import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-pasajes',
  templateUrl: './pasajes.component.html',
  styleUrls: ['./pasajes.component.css'],
})
export class PasajesComponent implements OnInit {
  pasajes!: Array<Pasaje>;
  categoriaFiltrar!: string;

  constructor(private pasajeService: PasajeService, private router: Router) {
    this.pasajes = new Array<Pasaje>();
    this.categoriaFiltrar = '';
    
  }

  ngOnInit(): void {
    this.obtenerPasajes();
  }

  obtenerPasajes() {
    this.pasajeService.getPasajes().subscribe((res: Array<Pasaje>) => {
      Object.assign(this.pasajes, res);
    });
  }

  filtrarPorCategoria() {
    this.pasajeService.filterPasajesByCategoria(this.categoriaFiltrar).subscribe((res: Array<Pasaje>) => {
        this.pasajes = [];
        Object.assign(this.pasajes, res);
      });
  }

  editarPasaje(pasaje: Pasaje) {
    this.router.navigate(['/pasajes/', pasaje._id]);
  }

  eliminarPasaje(pasaje: Pasaje) {
    this.pasajeService.deletePasaje(pasaje._id).subscribe((res) => {
      console.log(res)
    });
    //recarga la pagina asi se actualiza el table
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/pasajes']);
  }

  limpiar() {
    this.categoriaFiltrar = '';
    //recarga la pagina asi se actualiza el table
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/pasajes']);
  }
}
