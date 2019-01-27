import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { DomainService } from './services/domain.service';
import { ClientService } from './services/client.service';
import { AuthGuard } from './services/auth-guard.service';
import { EnvironmentService } from './services/environment.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [StorageService, DomainService, ClientService, AuthGuard, EnvironmentService]
})
export class SharedModule { }
