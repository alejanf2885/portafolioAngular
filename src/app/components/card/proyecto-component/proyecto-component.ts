import { Component, Input } from '@angular/core';
import Proyecto from '../../../models/Proyecto';

@Component({
  selector: 'card-proyecto',
  standalone: false,
  templateUrl: './proyecto-component.html',
  styleUrl: './proyecto-component.css',
})
export class ProyectoComponent {

  @Input() project!:Proyecto;

}
