import { bootstrapApplication } from '@angular/platform-browser';
import { AppCounter } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppCounter, config);

export default bootstrap;
