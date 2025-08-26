import { Component, Input, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MouseOver } from '../../directives/mouse-over';
import { siCss } from 'simple-icons'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-badges',
  imports: [FaIconComponent, MouseOver, CommonModule],
  templateUrl: './badges.html',
  styleUrl: './badges.css',
})
export class Badges implements OnInit {
  iconoSimple = siCss.path;
  /* Los colores de las badges se deben añadir en tailwind.config.js */

  @Input() badgeData: any;
  @Input() isFilled: boolean = true;

  backgroundClass?: string;
  textColorClass?: string;
  darkBackgroundClass?: string;
  darkTextColorClass?: string;

  //Aplica solo para las no filled
  borderColorClass?: string;

  ngOnInit() {
    const color = this.badgeData.color;
    /*
      this.backgroundClass = `bg-${color}-100`;
      this.textColorClass = `text-${color}-700`;
      
      this.darkBackgroundClass = `dark:bg-${color}-700`;
      this.darkTextColorClass = `dark:text-${color}-100`;
      */

    this.darkTextColorClass = `dark:text-${color}-100`;
    if (this.isFilled) {
      this.backgroundClass = `bg-${color}-100`;
      this.darkBackgroundClass = `dark:bg-${color}-500`;
      this.textColorClass = `text-${color}-500`;
    } else {
      //solo para no filled
      this.borderColorClass = `border-${color}-500`;
      this.textColorClass = `text-${color}-700`;
    }

  }

  joinedClasses() {
    return [
      this.backgroundClass,
      this.textColorClass,
      this.darkBackgroundClass,
      this.darkTextColorClass,
      this.borderColorClass,
    ].join(' ');
  }
  // En tu componente de badges

  get isFontAwesomeIcon(): boolean {
    return this.badgeData.icon && this.badgeData.icon.type === 'font-awesome';
  }

  get isSimpleIcon(): boolean {
    return this.badgeData.icon && this.badgeData.icon.type === 'simple-icons';
  }

 
}
