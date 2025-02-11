// heading.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  template: `<h1>This is my heading: {{ title }}</h1>`
  // ...other component metadata properties
})
export class HeadingComponent {
  // add inputs for editable properties
  @Input() title!: string;
}