import { Component, Input, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MouseOver } from '../../directives/mouse-over';

@Component({
  selector: 'app-badges',
  imports: [ FaIconComponent, MouseOver ],
  templateUrl: './badges.html',
  styleUrl: './badges.css'
})
export class Badges implements OnInit {

  /* Los colores de las badges se deben añadir en tailwind.config.js */
  
  @Input() badgeData: any;

  backgroundClass?: string;
  textColorClass?: string;
  darkBackgroundClass?: string;
  darkTextColorClass?: string;

  ngOnInit() {
      const color = this.badgeData.color;
      /*
      this.backgroundClass = `bg-${color}-100`;
      this.textColorClass = `text-${color}-700`;
      
      this.darkBackgroundClass = `dark:bg-${color}-700`;
      this.darkTextColorClass = `dark:text-${color}-100`;
      */
     this.backgroundClass = `bg-${color}-100`;
      this.textColorClass = `text-${color}-500`;
      
      this.darkBackgroundClass = `dark:bg-${color}-500`;
      this.darkTextColorClass = `dark:text-${color}-100`;
  }

  joinedClasses(){
    return [
      this.backgroundClass,
      this.textColorClass,
      this.darkBackgroundClass,
      this.darkTextColorClass
    ].join(' ');
  }


}
