import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { PantallaDetalleComponent } from './pantalla-detalle/pantalla-detalle.component';


const routes: Routes = [{
  path: 'portal', component: DashboardComponent, children: [
    { path: 'inicio', component: PantallaInicioComponent, outlet: 'contenedor' },
    { path: 'detalle', component: PantallaDetalleComponent, outlet: 'contenedor' }

  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
