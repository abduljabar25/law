import { Component } from '@angular/core';
import { Platform} from '@ionic/angular';
import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';  
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public admob: AdMobFree , public platform: Platform) {}
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
