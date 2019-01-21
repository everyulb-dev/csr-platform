import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBaseComponent } from './pages/project-base/project-base.component';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectBaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
