import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FormLibroComponent } from './components/form-libro/form-libro.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { FormTransaccionesComponent } from './components/form-transacciones/form-transacciones.component';
import { PasajesComponent } from './components/pasajes/pasajes.component';
import { LibrosComponent } from './components/libros/libros.component';
import { MostrarCategoriaPipe } from './pipes/mostrar-categoria.pipe';
import { FormPasajeComponent } from './components/form-pasaje/form-pasaje.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LibrosComponent,
    FormLibroComponent,
    TransaccionesComponent,
    FormTransaccionesComponent,
    PasajesComponent,
    MostrarCategoriaPipe,
    FormPasajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
