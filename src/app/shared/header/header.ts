import { Component, ElementRef } from '@angular/core';
import { headerData } from '../../../lib/data';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  imports: [FaIconComponent],
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
}
