import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'الرئيسية',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'عن التطبيق',
      url: '/list',
      icon: 'alert'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,public admob: AdMobFree ,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
  ionViewDidLoad() {
    if(this.platform.is('cordova')) { 
    const bannerConfig: AdMobFreeInterstitialConfig = {  
      id : 'ca-app-pub-9531015139305233/8826608321',
      isTesting: false, // Remove in production  
        autoShow: true  ,
         
    };  
    this.admob.banner.config(bannerConfig);

		this.admob.banner.prepare()
                .then(()=>{
                       this.admob.banner.show();
                  })
               .catch(e => console.log(e));
}
}
}
