import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppCounter } from './app/app.component';

bootstrapApplication(AppCounter, appConfig)
  .catch((err) => console.error(err));
