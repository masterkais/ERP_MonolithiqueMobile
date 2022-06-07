import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserInterfacePageRoutingModule } from './user-interface-routing.module';

import { UserInterfacePage } from './user-interface.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserInterfacePageRoutingModule
  ],
  declarations: [UserInterfacePage]
})
export class UserInterfacePageModule {}
