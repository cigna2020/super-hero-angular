import {NgModule} from '@angular/core';
import {LoginPageComponent} from './login-page.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: LoginPageComponent}
    ]),
    SharedModule
  ],
  exports: [
    RouterModule,
  ]
})

export class LoginPageModule {
}
