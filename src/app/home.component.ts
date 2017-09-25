import { Component, OnInit } from '@angular/core';
declare var sskyElement: any;

@Component({
  selector: 'home',
  template: `home component`
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    if (typeof sskyElement === 'undefined') {
      let body: any = document.getElementsByTagName('body')[0];
      let script: any = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://play.sundaysky.com/main/sundaysky-player.grey.en-us.min.js';
      body.appendChild(script);
    }
  }
}
