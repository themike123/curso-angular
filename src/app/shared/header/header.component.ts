import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  _tituloNavBar: string = 'Mi primer Navbar';
  _menuCierraSesionBoolean: boolean = false;

  constructor( protected router: Router ) { }

  ngOnInit(): void {
    
  }

  btnInicio(){
    this.router.navigateByUrl('portal/(contenedor:/inicio)', { skipLocationChange: true });
  }

  btnDetalles(){
    this.router.navigateByUrl('portal/(contenedor:/detalle)', { skipLocationChange: true });
  }

}
