import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { CsrBaseComponent } from './pages/csr-base/csr-base.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [DashboardComponent, UpdatesComponent, CsrBaseComponent, ProjectsComponent, TasksComponent],
  exports: [DashboardComponent]


})
export class DashboardModule { }
