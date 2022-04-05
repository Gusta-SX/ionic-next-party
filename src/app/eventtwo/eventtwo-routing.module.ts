import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventtwoPage } from './eventtwo.page';

const routes: Routes = [
  {
    path: '',
    component: EventtwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventtwoPageRoutingModule {}
