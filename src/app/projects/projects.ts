import { Component } from '@angular/core';
import { projectsInfo } from '../../lib/data';
import { ScrollFade } from '../directives/scroll-fade';
import { Badges } from '../shared/badges/badges';

@Component({
  selector: 'app-projects',
  imports: [ ScrollFade, Badges ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projectsInfo = projectsInfo;
  

}
