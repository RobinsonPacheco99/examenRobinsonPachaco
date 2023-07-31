import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { InsertarComponent } from './pages/insertar/insertar.component';
import { MirarComponent } from './pages/mirar/mirar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    ComponentesComponent,
    NavbarComponent,
    BuscarComponent,
    InsertarComponent,
    MirarComponent
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
