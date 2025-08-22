import { Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOver implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // Asegura que la transición esté habilitada por defecto
    this.elementRef.nativeElement.classList.add(
      'transition',
      'transform',
      'duration-300'
    );
  }

  // Detecta el evento 'mouseenter' (el mouse entra al elemento)
  @HostListener('mouseenter') onMouseEnter(): void {
    this.elementRef.nativeElement.classList.add('scale-110');
  }

  // Detecta el evento 'mouseleave' (el mouse sale del elemento)
  @HostListener('mouseleave') onMouseLeave(): void {
    this.elementRef.nativeElement.classList.remove('scale-110');
  }
}
