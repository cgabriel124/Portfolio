import { Component } from '@angular/core';
import { ScrollFade } from '../directives/scroll-fade';
import { skills } from '../../lib/data';
import { Badges } from './badges/badges';

@Component({
  selector: 'app-skills',
  imports: [ ScrollFade, Badges ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  skills = skills;

}
