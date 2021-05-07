import {NgModule} from '@angular/core';
import {HeroSelectionPageComponent} from './hero-selection-page.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HeroSelectionPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'selection', component: HeroSelectionPageComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class HeroSelectionPageModule {
}
