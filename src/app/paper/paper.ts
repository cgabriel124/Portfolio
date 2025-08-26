import { Component } from '@angular/core';
import { paperData } from '../../lib/data';

@Component({
  selector: 'app-paper',
  imports: [],
  templateUrl: './paper.html',
  styleUrl: './paper.css',
})
export class Paper {
  paperData = paperData;
  
  get paperEntries() {
    return Object.entries(this.paperData);
  }
}
