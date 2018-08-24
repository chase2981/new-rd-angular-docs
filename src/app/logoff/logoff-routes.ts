import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoffComponent } from './logoff.component';
import { LogoffResolve } from './logoff.resolve';

export const routes: Routes = [
    { path: '', resolve: { logout: LogoffResolve }, component: LogoffComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    LogoffResolve
  ]
})
export class LogoutRoutingModule { }