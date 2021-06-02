import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavigationComponent } from './navigation/navigation.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
]

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  // useHash: true
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PricingComponent,
    AboutUsComponent,
    ContactFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot(routes, routerOptions)

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
