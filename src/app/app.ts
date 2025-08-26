import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";  
import { PersonalData } from "./personal-data/personal-data";
import { Experience } from "./experience/experience";
import { Education } from "./education/education";
import { Skills } from "./skills/skills";
import { Background } from "./shared/background/background";
import { Footer } from "./shared/footer/footer";
import { Paper } from "./paper/paper";
import { Projects } from "./projects/projects";
@Component({
  selector: 'app-root',
  imports: [Header, PersonalData, Experience, Education, Skills, Background, Footer, Paper, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
