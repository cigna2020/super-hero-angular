import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HeroSelectionPageComponent } from './hero-selection-page/hero-selection-page.component';
import { HeroesListComponent } from './user-info/heroes-list/heroes-list.component';
import { HistoryComponent } from './user-info/history/history.component';
import { PowerupsComponent } from './user-info/powerups/powerups.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './login-page/add-user/registration.component';
import {ValidatorService} from './shared/validator.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserInfoComponent,
    HeroSelectionPageComponent,
    HeroesListComponent,
    HistoryComponent,
    PowerupsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
