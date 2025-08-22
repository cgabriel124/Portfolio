import { Component } from '@angular/core';
import { personalData } from '../../lib/data';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScrollFade } from '../directives/scroll-fade';



@Component({
  selector: 'app-personal-data',
  imports: [ FaIconComponent, ScrollFade ],
  templateUrl: './personal-data.html',
  styleUrl: './personal-data.css',
})
export class PersonalData {
  personalData = personalData

}
