import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(public translate: TranslateService) {
  	translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
  }

  ngOnInit() {
  }

  switchLang(lang: string) {
  		this.translate.use(lang);
  }

}
