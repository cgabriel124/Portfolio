import { Component, ElementRef, NgModule, HostListener } from '@angular/core';
import { headerData } from '../../../lib/data';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ScrollFade } from '../../directives/scroll-fade'


@Component({
  selector: 'app-header',
  imports: [FaIconComponent, CommonModule, ScrollFade],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  headerData = headerData;

  constructor(private elementRef: ElementRef) {}
  scrollTo(event: Event, sectionId: string): void {

    event.preventDefault();

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {

      const headerHeight = this.elementRef.nativeElement.offsetHeight;

      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  isMenuOpen: boolean = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

    // Opcional: Cierra el menú si se redimensiona la pantalla a un tamaño grande
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768) { // El breakpoint de md en Tailwind
      this.isMenuOpen = false;
    }
  }

}
