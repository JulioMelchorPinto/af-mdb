import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
  }

  switchLang(lang: string) {
      this.translate.use(lang);
  }

  ngOnInit() {
  }

}
