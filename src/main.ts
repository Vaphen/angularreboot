import { getPlatform } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Bootstrap } from './bootstrap.singleton';


Bootstrap.Instance.restart$.subscribe(_ => {
  // destroy the platform if there is already an angular instance running
  if(getPlatform()) {
    getPlatform().destroy();
    document.body.appendChild(document.createElement('app-root'))
  }


  platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
});

Bootstrap.Instance.restart();
