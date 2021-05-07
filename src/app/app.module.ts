import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeroSelectionPageComponent } from './hero-selection-page/hero-selection-page.component';
import { HeroesListComponent } from './user-info/heroes-list/heroes-list.component';
import { HistoryComponent } from './user-info/history/history.component';
import { PowerupsComponent } from './user-info/powerups/powerups.component';
import {ValidatorService} from './shared/validator.service';
import {HttpClientModule} from '@angular/common/http';
import {LoginPageModule} from './login-page/login-page.module';
import {SharedModule} from './shared/shared.module';
import {RegistrationModule} from './login-page/registration/registration.module';
import {HeroSelectionPageModule} from './hero-selection-page/hero-selection-page.module';
import {InvalidFieldService} from './shared/invalid-field.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    HeroesListComponent,
    HistoryComponent,
    PowerupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginPageModule,
    RegistrationModule,
    HeroSelectionPageModule,
    SharedModule
  ],
  providers: [ValidatorService, InvalidFieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
