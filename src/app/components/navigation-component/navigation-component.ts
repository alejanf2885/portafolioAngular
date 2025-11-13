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
    new Seccion('Home', '/home', true),
    new Seccion('About', '/about', false),
    new Seccion('Projects', '/projects', false),
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
    const sections = document.querySelectorAll('section[id]');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            // Actualizamos el array de secciones
            this.secciones.forEach((seccion) => {
              seccion.activa = seccion.nombre === id;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      this.observer.observe(section);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
