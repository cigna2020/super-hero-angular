import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {AddUserComponent} from './login-page/add-user/add-user.component';
import {HeroSelectionPageComponent} from './hero-selection-page/hero-selection-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'registration', component: AddUserComponent},
  {path: 'selection', component: HeroSelectionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
