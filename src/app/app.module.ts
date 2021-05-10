import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule  } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
//componentes creados
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { PantallaDetalleComponent } from './pantalla-detalle/pantalla-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PantallaInicioComponent,
    PantallaDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
