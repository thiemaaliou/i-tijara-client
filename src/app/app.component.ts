import { Component, Input } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{

  public appPages = [
    {
      title: 'Accueil',
      url: '/home'
    },
    {
      title: 'Chapelets',
      url: '/list'
    },
    {
      title: 'Bonnets',
      url: '/list'
    },
    {
      title: 'Chaussures',
      url: '/list'
    },
    {
      title: 'Habillements et Accessoires',
      url: '/list'
    },
    ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
