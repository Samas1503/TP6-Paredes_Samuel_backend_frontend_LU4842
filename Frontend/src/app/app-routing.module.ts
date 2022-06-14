import { FormPasajeComponent } from './components/form-pasaje/form-pasaje.component';
import { PasajesComponent } from './components/pasajes/pasajes.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLibroComponent } from './components/form-libro/form-libro.component';
import { FormTransaccionesComponent } from './components/form-transacciones/form-transacciones.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix', //default
    redirectTo: 'libro/ver',
  },
  { path: 'libro/ver', component: LibrosComponent, pathMatch: 'full' },
  {
    path: 'libro/crearLibro',
    component: FormLibroComponent,
    pathMatch: 'full',
  },
  {
    path: 'transaccion/ver',
    component: TransaccionesComponent,
    pathMatch: 'full',
  },
  {
    path: 'transaccion/generar',
    component: FormTransaccionesComponent,
    pathMatch: 'full',
  },
  {
    path: 'pasajes',
    component: PasajesComponent,
    pathMatch: 'full',
  },
  {
    path: 'pasajes/:id',
    component: FormPasajeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
