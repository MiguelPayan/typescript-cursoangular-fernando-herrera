import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import './topics/01-basic-types';
import './topics/02-object-interface';
import './topics/03-functions';

import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ``,
})
export class App {
  name = 'Angular';
  dev = 'Mike :D';
}

bootstrapApplication(App);
