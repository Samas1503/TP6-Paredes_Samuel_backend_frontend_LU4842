import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from 'src/app/models/pasaje';
import { Persona } from 'src/app/models/persona';
import { PasajeService } from 'src/app/services/pasaje.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-form-pasaje',
  templateUrl: './form-pasaje.component.html',
  styleUrls: ['./form-pasaje.component.css'],
})
export class FormPasajeComponent implements OnInit {
  pasaje!: Pasaje;
  personas!: Array<Persona>;
  action!: boolean;
  catVieja!: string;

  constructor(
    private router: Router,private route: ActivatedRoute,private pasajeService: PasajeService,private personaService: PersonaService) {
    this.personas = new Array<Persona>();
    this.pasaje = new Pasaje();
    this.pasaje.categoriaPasajero = '';
    this.pasaje.fechaCompra = new Date().toLocaleString();
    this.obtenerPersonas();
  }

  ngOnInit(): void {
    this.verificarModo();
  }

  verificarModo() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        if (params['id'] === 'crear') {
          this.action = false;
          this.catVieja = '';
        }
        else {
          this.action = true;
          this.obtenerPasaje(params['id'])
        }
      }
    });
  }
  
  obtenerPersonas() {
    this.personaService.getPersonas().subscribe((res: Array<Persona>) => {
      Object.assign(this.personas, res);
    });
  }

  obtenerPasaje(id: string) {
    this.pasajeService.getPasaje(id).subscribe((res: Pasaje) => {
      Object.assign(this.pasaje, res);
      this.catVieja = res.categoriaPasajero;
    });
  }

  crearPasaje() {
    this.pasaje.precioPasaje = this.calcularTotal(this.pasaje.categoriaPasajero);
      this.pasajeService.postPasaje(this.pasaje).subscribe((res) => {
        console.log(res)
      });
    this.volver()
  }
  actualizarPasaje() {
    this.pasaje.precioPasaje = this.calcularTotal(this.pasaje.categoriaPasajero);
    this.pasajeService.putPasaje(this.pasaje).subscribe((res) => {
      console.log(res);
    });
    this.volver()
  }

  volver() {
    this.router.navigate(['/pasajes']);
  }

  calcularTotal(categoria:string) {
    let descuento = this.pasaje.precioPasaje;
    switch (this.catVieja) {
      case '':
        if (categoria == 'm') descuento *= 0.75;
        else if (categoria == 'j') descuento *= 0.5;
        break;
      case 'a':
        if (categoria == 'm') descuento *= 0.75;
        else if (categoria == 'j') descuento *= 0.5;
        break;
      case 'm':
        if (categoria == 'a') descuento /= 0.75;
        else if (categoria == 'j') descuento = (descuento / 0.75) * 0.5;
        break;
      case 'j':
        if (categoria == 'm') descuento = (descuento / 0.5) * 0.75;
        else if (categoria == 'a') descuento /= 0.5;
        break;
    }
      return descuento
  }
}
