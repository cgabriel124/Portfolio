import { Component } from '@angular/core';
import { workExperience } from '../../lib/data';
import { ScrollFade } from '../directives/scroll-fade';

@Component({
  selector: 'app-experience',
  imports: [ ScrollFade ],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences = workExperience
}
