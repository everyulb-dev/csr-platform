import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatesComponent } from './components/updates/updates.component';
import { CsrBaseComponent } from './pages/csr-base/csr-base.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],

  declarations: [UpdatesComponent, CsrBaseComponent, ProjectsComponent, TasksComponent],
  exports: [CsrBaseComponent]


})
export class DashboardModule { }
