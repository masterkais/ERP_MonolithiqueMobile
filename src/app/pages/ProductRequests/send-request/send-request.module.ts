import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendRequestPageRoutingModule } from './send-request-routing.module';

import { SendRequestPage } from './send-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendRequestPageRoutingModule
  ],
  declarations: [SendRequestPage]
})
export class SendRequestPageModule {}
