import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectBaseComponent } from './pages/project-base/project-base.component';
import { ProjectProgressComponent } from './components/project-progress/project-progress.component';
import { ProjectComponentsComponent } from './components/project-components/project-components.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  declarations: [ProjectBaseComponent, ProjectProgressComponent, ProjectComponentsComponent]
})
export class ProjectModule { }
