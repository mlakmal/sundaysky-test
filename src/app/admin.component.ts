import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  template: `admin component
  <br/>constructor and init time should be equal and populated. sunday sky promise is brewaking, if those times are missing or not equal.
  <br/>
  constructor time: {{cons}}
  <br/>
  init time: {{init}}`
})
export class AdminComponent implements OnInit {
  cons: any;
  init: any;
  constructor() {
    this.cons = new Date();
    console.log(`home constructor: ${this.cons}`);
  }

  ngOnInit() {
    this.init = new Date();
    console.log(`home init: ${this.init}`);
  }
}
