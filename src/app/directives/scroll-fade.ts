import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollFade]',
})
export class ScrollFade implements OnInit {
  @Input() delay: number = 0;
  @Input() keepInScreen: boolean = true;
  private isIntersectingOnce = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Se ejecuta solo la primera vez si keepInScreen es true
            if (this.keepInScreen && this.isIntersectingOnce) {
              return; // No hace nada si ya se ha animado una vez
            }

            // Aplica la animación con el retraso
            setTimeout(() => {
              this.elementRef.nativeElement.classList.remove(
                'opacity-0',
                'translate-y-4'
              );
              this.elementRef.nativeElement.classList.add(
                'opacity-100',
                'translate-y-0'
              );
            }, this.delay);
            
            this.isIntersectingOnce = true; // Marca que la animación ya se ha ejecutado
            
          } else {
            // Lógica de reseteo si keepInScreen es false
            if (!this.keepInScreen) {
              this.elementRef.nativeElement.classList.remove(
                'opacity-100',
                'translate-y-0'
              );
              this.elementRef.nativeElement.classList.add(
                'opacity-0',
                'translate-y-4'
              );
              this.isIntersectingOnce = false; // Permite que la animación se ejecute de nuevo
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    this.elementRef.nativeElement.classList.add(
      'opacity-0',
      'translate-y-4',
      'transition-all',
      'duration-1000'
    );
    observer.observe(this.elementRef.nativeElement);
  }
}