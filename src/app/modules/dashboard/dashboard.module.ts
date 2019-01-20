import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatesComponent } from './components/updates/updates.component';
import { CsrBaseComponent } from './pages/csr-base/csr-base.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatMenuModule } from '@angular/material/menu';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatMenuModule,
    // MatIconModule,
    // MatButtonModule,
    // BrowserAnimationsModule
  ],

  declarations: [UpdatesComponent, CsrBaseComponent, ProjectsComponent, TasksComponent],
  exports: [CsrBaseComponent]


})
export class DashboardModule { }
