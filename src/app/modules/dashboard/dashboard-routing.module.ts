import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsrBaseComponent } from './pages/csr-base/csr-base.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CsrBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
