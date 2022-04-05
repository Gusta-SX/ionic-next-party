import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventtwoPageRoutingModule } from './eventtwo-routing.module';

import { EventtwoPage } from './eventtwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventtwoPageRoutingModule
  ],
  declarations: [EventtwoPage]
})
export class EventtwoPageModule {}
