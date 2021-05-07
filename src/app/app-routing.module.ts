import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegistrationComponent} from './login-page/add-user/registration.component';
import {HeroSelectionPageComponent} from './hero-selection-page/hero-selection-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'selection', component: HeroSelectionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
