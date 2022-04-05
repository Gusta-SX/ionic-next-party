import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventcardPage } from './eventcard.page';

const routes: Routes = [
  {
    path: '',
    component: EventcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventcardPageRoutingModule {}
