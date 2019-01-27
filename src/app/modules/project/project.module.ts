import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectBaseComponent } from './pages/project-base/project-base.component';
import { ProjectProgressComponent } from './components/project-progress/project-progress.component';
import { ProjectComponentsComponent } from './components/project-components/project-components.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatStepperModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAF16wKOlIRqQOAxtvR7Gk2Oobvpb_BfDk'
    // }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF16wKOlIRqQOAxtvR7Gk2Oobvpb_BfDk' //Google API key for maps
    })
  ],
  declarations: [ProjectBaseComponent, ProjectProgressComponent, ProjectComponentsComponent, MapComponent]
})
export class ProjectModule { }
