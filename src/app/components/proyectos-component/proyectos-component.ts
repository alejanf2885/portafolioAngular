import { Component } from '@angular/core';
import Proyecto from '../../models/Proyecto';

@Component({
  selector: 'app-proyectos',
  standalone: false,
  templateUrl: './proyectos-component.html',
  styleUrl: './proyectos-component.css',
})
export class ProyectosComponent {

  proyectos:Array<Proyecto> = [
    new Proyecto(
      'Landing Page-Titanazo Ibff Pro',
      'Landing page para un entrenador personal, diseñada para atraer nuevos clientes y mostrar sus servicios de manera efectiva.',
      'assets/images/TitanazoLuismi.png',
      'https://www.titanazoibffpro-luismi.com/',
      ['React', 'Tailwind', 'TypeScript']
    )
  ];

}
