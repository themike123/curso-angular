import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  _contenidoPiePagina = [
    {
      titulo: 'Legal', click:'', contenido: [
        { subtitulo: 'Aviso de Privacidad', click:'enlaceAvisoPrivacidad' },
        { subtitulo: 'Terminos y Condiciones', click:'enlaceTerminos_Condiciones'}
      ]
    }, {
      titulo: 'Avisos y condiciones', click:'', contenido: [
        { subtitulo: 'Preguntas freccuentes', click:'enlaceAvisoPrivacidad' },
        { subtitulo: 'Noticias', click:'enlaceTerminos_Condiciones'}
      ]
    }
  ]

  constructor() { 
    console.log(this._contenidoPiePagina);
  }

  ngOnInit(): void {
  }

}
