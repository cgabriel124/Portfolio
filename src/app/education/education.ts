import { Component } from '@angular/core';
import { education } from '../../lib/data';
import { ScrollFade } from '../directives/scroll-fade';

@Component({
  selector: 'app-education',
  imports: [ ScrollFade ],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  educations = education
}
