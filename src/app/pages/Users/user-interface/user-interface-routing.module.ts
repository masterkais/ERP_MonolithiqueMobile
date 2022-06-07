import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserInterfacePage } from './user-interface.page';

const routes: Routes = [
  {
    path: '',
    component: UserInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserInterfacePageRoutingModule {}
