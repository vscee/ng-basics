import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import 'zone.js/dist/zone';  // Included with Angular CLI.
/*
This import includes in polyfills.ts needed by Angular and is loaded before the app. For optimization polyfills.ts has been removed.
Zone JS is required by default for Angular itself.
*/
