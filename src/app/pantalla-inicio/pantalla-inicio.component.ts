import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.css']
})
export class PantallaInicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Store user in API
  traerInformacion(nombre, apPaterno, apMaterno){
    
    let url = "https://reqres.in/api/users";

    alert(nombre + ' ' + apPaterno + ' ' + apMaterno)
  } 

  //Function get alll users
  getUsers(){

  }

}
