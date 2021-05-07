import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'registration', component: RegistrationComponent}
    ]),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})

export class RegistrationModule {
}
