import { AboutComponent } from './about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    RouterModule.forChild(
      [
        { path: '**', component: AboutComponent }
      ])
  ],
  entryComponents: [AboutComponent],
  providers: []
})
export class AboutModule { }
