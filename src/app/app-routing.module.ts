import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { InsertarComponent } from './pages/insertar/insertar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MirarComponent } from './pages/mirar/mirar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'insertar', component: InsertarComponent, canActivate: [AuthGuard] },
  { path: 'mirar', component: MirarComponent, canActivate: [AuthGuard] },
  { path: 'buscar', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
