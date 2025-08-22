import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private elementRef: ElementRef) {}
  scrollTo(event: Event, sectionId: string): void {
    // Evita el comportamiento predeterminado del enlace
    event.preventDefault();

    // Obtiene la sección de destino
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Obtiene la altura del header actual
      const headerHeight = this.elementRef.nativeElement.offsetHeight;

      // Calcula la posición de desplazamiento con el offset
      const targetPosition = targetElement.offsetTop - headerHeight;

      // Realiza el desplazamiento con el offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }
}
