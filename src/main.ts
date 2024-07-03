import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
/* import './topics/01-basic-types';
import './topics/02-object-interface';
import './topics/03-functions';
import './topics/04-homework-types';
import './topics/05-basic-destructuring';
import './topics/06-function-destructuring';
import './topics/07-import-export'; */
import './topics/08-clases';
import './topics/09-generics';
import './topics/10-decorators';
import './topics/11-optional-chaining';
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
