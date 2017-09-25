import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    RouterModule.forChild(
      [
        { path: '**', component: AdminComponent }
      ])
  ],
  entryComponents: [AdminComponent],
  providers: []
})
export class AdminModule { }
