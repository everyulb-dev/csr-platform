import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectBaseComponent } from './pages/project-base/project-base.component';
import { ProjectProgressComponent } from './components/project-progress/project-progress.component';
import { ProjectComponentsComponent } from './components/project-components/project-components.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCardModule} from '@angular/material';
import { MonitoringComponent } from './components/monitoring/monitoring.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatStepperModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    ChartsModule
  ],
  declarations: [ProjectBaseComponent, ProjectProgressComponent, ProjectComponentsComponent, MonitoringComponent]
})
export class ProjectModule { }
