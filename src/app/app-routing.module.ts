import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroSelectionPageComponent} from './hero-selection-page/hero-selection-page.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
