import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/home' },
        { path: 'about', loadChildren: './about.module#AboutModule' },
        { path: 'admin', loadChildren: './admin.module#AdminModule' },
        { path: '**', component: HomeComponent }
      ])
  ],
  entryComponents: [
    HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
