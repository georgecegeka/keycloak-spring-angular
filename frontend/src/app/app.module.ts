import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedingComponent } from './feeding/feeding.component';
import { HttpClientModule } from '@angular/common/http';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import { initializer } from './utils/app-init';

@NgModule({
  declarations: [
    AppComponent,
    FeedingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
