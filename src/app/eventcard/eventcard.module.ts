import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventcardPageRoutingModule } from './eventcard-routing.module';

import { EventcardPage } from './eventcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventcardPageRoutingModule
  ],
  declarations: [EventcardPage]
})
export class EventcardPageModule {}
