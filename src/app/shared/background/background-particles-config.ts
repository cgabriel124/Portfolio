import {
  IParticlesProps,
  NgParticlesService,
  NgxParticlesComponent,
  NgxParticlesModule,
} from '@tsparticles/angular';
import { MoveDirection, OutMode } from '@tsparticles/engine';

export const PARTICLES_CONFIG: IParticlesProps = {
  background: {
    color: {
      value: '#141414',
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  fpsLimit: 80,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: '#fff',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.bounce,
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        height: 800,
        width: 800,
      },
      value: 30,
    },
    opacity: {
      value: 0.1,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
