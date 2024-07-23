import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { StylesPageComponent } from './components/styles-page/styles-page.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, StylesPageComponent],
  template: `
    <app-styles-page></app-styles-page>
    
  `,
})
export class App {}

bootstrapApplication(App);
