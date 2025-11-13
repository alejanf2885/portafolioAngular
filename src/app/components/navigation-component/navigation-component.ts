import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import Seccion from '../../models/Seccion';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation-component.html',
  styleUrl: './navigation-component.css',
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  secciones: Array<Seccion> = [
    new Seccion('Home', '/home', false),
    new Seccion('Projects', '/projects', false),
    new Seccion('About', '/about', false),
    
    new Seccion('Contact', '/contact', false),
  ];

  private observer!: IntersectionObserver;

  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  //Calcular la seccion activa
  ngAfterViewInit(): void {
    // Usar setTimeout para asegurar que todos los componentes estén renderizados
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      
      if (sections.length === 0) {
        console.warn('No se encontraron secciones con id');
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          // Encontrar la sección que está más visible
          let mostVisibleEntry: any = null;
          let maxRatio = 0;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisibleEntry = entry;
            }
          });

          // Si hay una sección visible, activarla
          if (mostVisibleEntry && mostVisibleEntry.target) {
            const id = mostVisibleEntry.target.id;
            
            // Actualizamos el array de secciones
            this.secciones.forEach((seccion) => {
              seccion.activa = seccion.nombre === id;
            });
          }
        },
        { 
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-20% 0px -20% 0px' // Solo activar cuando esté en el centro de la pantalla
        }
      );

      sections.forEach((section) => {
        this.observer.observe(section);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
