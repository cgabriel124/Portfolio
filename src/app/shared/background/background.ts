import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoveDirection, OutMode, Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { IParticlesProps, NgParticlesService, NgxParticlesComponent, NgxParticlesModule } from "@tsparticles/angular"
import { PARTICLES_CONFIG } from './background-particles-config';

@Component({
  selector: 'app-background',
  imports: [ NgxParticlesModule, CommonModule ],
  templateUrl: './background.html',
  styleUrl: './background.css'
})
export class Background {

  id: string = "tsparticles";
  particlesOptions: IParticlesProps = PARTICLES_CONFIG;

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    	this.ngParticlesService.init(async (engine) => {
          await loadSlim(engine);
        });
  }

  particlesLoaded(container: Container): void {
    console.log("Container loaded", container);
  }

}
